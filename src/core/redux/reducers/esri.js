import {
  ESRI_LOADED,
} from '../actions/esri/constants';

const defaultState = {
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ESRI_LOADED: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
