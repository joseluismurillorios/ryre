import {
  SET_ADDRESS,
  SET_OPINION,
  CLEAR_OPINION,
  SET_LATLNG,
} from '../actions/info/constants';

import { CATEGORIES } from '../../helpers/helper-constants';

const defaultState = {
  address: '',
  longitude: 0,
  latitude: 0,
  // latitude: 32.520666,
  // longitude: -117.021315,
  opinion: {
    type: '',
    category: '3',
    subcategory: '',
    message: '',
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }

    case SET_LATLNG: {
      const { latitude, longitude } = action.payload;
      return {
        ...state,
        address: '',
        latitude,
        longitude,
      };
    }

    case SET_OPINION: {
      const { value, name } = action.payload;
      if (name === 'category') {
        return {
          ...state,
          opinion: {
            ...state.opinion,
            category: value,
            subcategory: '',
            type: '',
          },
        };
      }
      if (name === 'subcategory') {
        const typ = CATEGORIES[state.opinion.category].items[value].items;
        const type = Object.keys(typ)[0];
        return {
          ...state,
          opinion: {
            ...state.opinion,
            subcategory: value,
            type,
          },
        };
      }
      return {
        ...state,
        opinion: {
          ...state.opinion,
          [name]: value,
        },
      };
    }

    case CLEAR_OPINION: {
      return {
        ...defaultState,
        latitude: state.latitude,
        longitude: state.longitude,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
