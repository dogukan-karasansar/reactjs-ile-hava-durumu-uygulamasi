import * as Constants from "../constants";
import { errorMessageHandle } from "../../utils/utilityHelpers";
import Api from "../../utils/api";

export const fetchWeather = (city) => {};

export const fetchCityJsonData = (query = "") => {
  return (dispatch) => {
    if (!query)
      return dispatch({ type: Constants.GET_CITY_JSON_DATA, payload: [] });
    Api.get(
      process.env.REACT_APP_OPENWEATHER_API_URL +
        `/geo/1.0/direct?q=${query}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    )
      .then((response) => {
        console.log(response);
        dispatch({
          type: Constants.GET_CITY_JSON_DATA,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: Constants.GET_CITY_JSON_DATA,
          error: errorMessageHandle(error.status),
        });
      });
  };
};
