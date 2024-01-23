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
import { Point } from 'ol/geom'
import Geocoder from 'ol-geocoder'
import { Icon, Style } from 'ol/style'


class mPoint {
    constructor(public view: View, public projection: ProjectionLike) {
    }

    public onChange(callback: (lon: number, lat: number) => void) {
        this.view.on('change', () => {
            const [lat, lon] = this.getCoordinates()
            callback(lat, lon)
        })
    }

    public getCoordinates() {
        return this.view.getCenter()
    }

    public setCoordinates(lat: number, lon: number) {
        this.view.setCenter(fromLonLat([lat, lon], this.projection))
    }
}

function GetPointMap(id: string, lat: number = 0, lon: number = 0,zoom:number=10){
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
        zoom: zoom,
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
    })

    function updateCenter() {
        // Получаем новые координаты центра карты
        const [lat, lon] = map.getView().getCenter()
        // Обновляем координаты точки
        point.getGeometry().setCoordinates([lat, lon])
    }

    map.on('movestart', updateCenter)
    map.on('moveend', updateCenter)
    target.classList.add('map-done')
    return new mPoint(view, projection)
}

window['traineratwot'] = {}
window['traineratwot'].GetPointMap = GetPointMap

