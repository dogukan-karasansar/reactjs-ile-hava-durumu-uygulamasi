import * as Constants from "../constants";
import {
  errorMessageHandle,
  selectOptionsFormatter,
} from "../../utils/utilityHelpers";
import Api from "../../utils/api";

export const fetchWeather = (city) => {};

export const fetchCityJsonData = (query = "") => {
  return async (dispatch) => {
    if (!query)
      return dispatch({ type: Constants.GET_CITY_JSON_DATA, payload: [] });

    try {
      const response = await Api.get(
        process.env.REACT_APP_OPENWEATHER_API_URL +
          `/geo/1.0/direct?q=${query}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      dispatch({
        type: Constants.GET_CITY_JSON_DATA,
        payload: await selectOptionsFormatter(response.data),
      });
    } catch (error) {
      dispatch({
        type: Constants.GET_CITY_JSON_DATA,
        error: errorMessageHandle(error.status),
      });
    }
  };
};

export const setCities = (cities = []) => {
  return {
    type: Constants.SET_CITIES,
    payload: cities,
  };
};
