import axios from 'axios';

import {
  COUNTRY_REQUEST_INITIATED,
  COUNTRY_REQUEST_SUCCESS,
  COUNTRY_REQUEST_FAILED,
} from './CountryActionTypes';

export const countryReqInitiated = () => ({
  type: COUNTRY_REQUEST_INITIATED,
});

export const countryReqSuccess = (countries) => ({
  type: COUNTRY_REQUEST_SUCCESS,
  payload: countries,
});

export const countryReqFailed = (error) => ({
  type: COUNTRY_REQUEST_FAILED,
  payload: error,
});

export const getCountries = () => async (dispatch) => {
  try {
    dispatch(countryReqInitiated());
    const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
    dispatch(countryReqSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(countryReqFailed(err));
  }
};
