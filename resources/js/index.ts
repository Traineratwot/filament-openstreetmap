import Map from 'ol/Map'
import MousePosition from 'ol/control/MousePosition'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { createStringXY } from 'ol/coordinate'
import { defaults as defaultControls } from 'ol/control'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Modify } from 'ol/interaction'

function GetPointMap(id: string, x: number = 0, y: number = 0) {
    const projection = 'EPSG:4326'

    const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: projection,
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: `mouse-position-${id}`,
        target: document.getElementById(`OSMap-${id}`),
    })
    let point = new Feature({
        projection: projection,
        geometry: new Point(fromLonLat([x, y])),
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
    const map = new Map({
        controls: defaultControls().extend([mousePositionControl]),
        layers: [
            MapLayer,
            vectorLayer,
        ],
        target:target,
        view: new View({
            projection: projection,
            center: [x, y],
            zoom: 10,
        }),
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
    document.getElementById(`OSMap-${id}`)?.addEventListener('click', function() {
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
        const [x, y] = coordsText.split(',').map((s) => parseFloat(s))
        point.setGeometry(new Point(fromLonLat([x, y])))
    })

    return {
        onChange: (callback: (lon: number, lat: number) => void) => {
            point.on('change', function () {
                const geom = point.getGeometry()
                if (geom === null) {
                    return
                }
                geom.setProperties({
                    projection: projection,
                })
                const [x, y] = geom.getCoordinates()
                callback(x, y)
            })
        }
    }
}

window['traineratwot'] = {}
window['traineratwot'].GetPointMap = GetPointMap

