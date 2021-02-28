import {
  COUNTRY_REQUEST_INITIATED,
  COUNTRY_REQUEST_SUCCESS,
  COUNTRY_REQUEST_FAILED,
} from './CountryActionTypes';

const initialState = {
  countries: [],
  loading: false,
  error: '',
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_REQUEST_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case COUNTRY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case COUNTRY_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
