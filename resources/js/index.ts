import Map from 'ol/Map'
import MousePosition from 'ol/control/MousePosition'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { Coordinate, createStringXY } from 'ol/coordinate'
import { defaults as defaultControls } from 'ol/control'
import { Feature } from 'ol'
import { fromLonLat, ProjectionLike } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Modify } from 'ol/interaction'
import { Point } from 'ol/geom'
import Geocoder from 'ol-geocoder'
import { Icon, Style } from 'ol/style'


class mPoint {
    constructor(public point: Feature<Point>, public projection: ProjectionLike, public view: View) {
    }

    public onChange(callback: (lon: number, lat: number) => void) {
        this.point.on('change', () => {
            const [lat, lon] = this.getCoordinates()
            callback(lat, lon)
        })
    }

    public getCoordinates() {
        const geom = this.point.getGeometry()
        if (geom === null) {
            return [null, null]
        }
        geom.setProperties({
            projection: this.projection,
        })
        return geom.getCoordinates()
    }

    public setCoordinates(lat: number, lon: number) {
        this.point.setGeometry(new Point(fromLonLat([lat, lon], this.projection)))
        this.view.setCenter(fromLonLat([lat, lon], this.projection))
    }
}

function GetPointMap(id: string, lat: number = 0, lon: number = 0) {
    const projection = 'EPSG:4326'

    const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: projection,
        className: `mouse-position-${id}`,
        target: document.getElementById(`OSMap-${id}`),
    })
    let point = new Feature({
        projection: projection,
        geometry: new Point(fromLonLat([lat, lon], projection)),
    })
    const vectorSource = new VectorSource({
        features: [point],
    })
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    })
    const MapLayer = new TileLayer({
        source: new OSM(),
    })
    const target = document.getElementById(`OSMap-${id}`);

    const view = new View({
        projection: projection,
        center: fromLonLat([lat, lon], projection),
        zoom: 10,
    })
    const map = new Map({
        controls: defaultControls().extend([mousePositionControl]),
        layers: [
            MapLayer,
            vectorLayer,
        ],
        target:target,
        view: view,
    })

    const modify = new Modify({
        hitDetection: vectorLayer,
        source: vectorSource,
    });
    modify.on(['modifystart', 'modifyend'], function (evt) {
        target.style.cursor = evt.type === 'modifystart' ? 'grabbing' : 'pointer';
    });
    const overlaySource = modify.getOverlay().getSource();
    overlaySource.on(['addfeature', 'removefeature'], function (evt: { type: string }) {
        target.style.cursor = evt.type === 'addfeature' ? 'pointer' : '';
    });

    map.addInteraction(modify);
    document.getElementById(`OSMap-${id}`)?.addEventListener('contextmenu', function(event) {
        event.preventDefault()
        const div = document.getElementsByClassName( `mouse-position-${id}`) as HTMLCollectionOf<HTMLDivElement>
        if (div.length === 0) {
            console.log('no mouse position')
            return
        }
        const coordsText = div[0].innerText || null
        if (coordsText === null) {
            console.log('no mouse position')
            return
        }
        const [lat, lon] = coordsText.split(',').map((s) => parseFloat(s))
        point.setGeometry(new Point(fromLonLat([lat, lon], projection)))
        return false
    })

    const geocoder = new Geocoder('nominatim', {
        provider: 'osm',
        lang: 'ru-RU', //en-US, fr-FR
        placeholder: 'Поиск...',
        limit: 5,
        keepOpen: true,
    })
    map.addControl(geocoder)
    geocoder.on('addresschosen', function(evt: any) {
        console.log(evt)
        const feature = evt.feature as Feature<Point>
        const coordinate = evt.coordinate as Coordinate
        feature.setStyle(new Style({
            image: new Icon({
                color: 'rgba(0, 0, 0, 0)',
                crossOrigin: 'anonymous',
                src: 'https://openlayers.org/en/latest/examples/data/dot.png',
                scale: 0.01,
            }),
        }))
        // application specific
        view.setCenter(fromLonLat([coordinate[0], coordinate[1]], projection))
        point.setGeometry(new Point(fromLonLat([coordinate[0], coordinate[1]], projection)))
    })
    target.classList.add('map-done')
    return new mPoint(point, projection, view)
}

window['traineratwot'] = {}
window['traineratwot'].GetPointMap = GetPointMap

