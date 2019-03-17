import { loadModules, loadCss } from 'esri-loader';

import { esriLoaded } from './index';

export const loadEsri = () => (
  dispatch => loadModules([
    'esri/tasks/Locator',
    'esri/Map',
    'esri/views/MapView',
    'esri/Graphic',
    'esri/geometry/Point',
    'esri/layers/KMLLayer',
    'esri/widgets/Legend',
    'esri/layers/FeatureLayer',
    'esri/widgets/Search',
    'esri/widgets/Zoom',
    'esri/geometry/Extent',
  ])
    .then(([
      Locator,
      Map,
      MapView,
      Graphic,
      Point,
      KMLLayer,
      Legend,
      FeatureLayer,
      Search,
      Zoom,
      Extent,
    ]) => {
      loadCss('https://js.arcgis.com/4.10/esri/css/main.css');
      dispatch(esriLoaded({
        Locator,
        Map,
        MapView,
        Graphic,
        Point,
        KMLLayer,
        Legend,
        FeatureLayer,
        Search,
        Zoom,
        Extent,
      }));
    })
    .catch((err) => {
      // handle any errors
      console.error(err);
    })
);

export default loadEsri;
