import {
  ESRI_LOADED,
} from './constants';

export const esriLoaded = payload => ({
  type: ESRI_LOADED,
  payload,
});

export default esriLoaded;
