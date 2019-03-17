import {
  SET_ADDRESS,
  SET_OPINION,
  CLEAR_OPINION,
  SET_LATLNG,
} from './constants';

export const setAddress = payload => ({
  type: SET_ADDRESS,
  payload,
});

export const setLatLng = payload => ({
  type: SET_LATLNG,
  payload,
});

export const setOpinion = payload => ({
  type: SET_OPINION,
  payload,
});

export const saveOpinion = payload => ({
  type: SET_OPINION,
  payload,
});

export const clearOpinion = payload => ({
  type: CLEAR_OPINION,
  payload,
});
