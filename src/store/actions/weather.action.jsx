import * as Constants from "../constants";
import {
  errorMessageHandle,
  selectOptionsFormatter,
} from "../../utils/utilityHelpers";
import Api from "../../utils/api";

export const fetchWeather = ({ city, lantude = null, lontude = null }) => {
  return async (dispatch) => {
    try {
      var params = "";
      
      if (lantude && lontude) {
        params = `lat=${lantude}&lon=${lontude}`;
      } else {
        params = `q=${city.value}`;
      }

      const response = await Api.get(
        process.env.REACT_APP_OPENWEATHER_API_URL +
          `/data/2.5/weather?${params}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );

      const { coord } = response.data;
      const { lat, lon } = coord;

      const forecast = await Api.get(
        process.env.REACT_APP_OPENWEATHER_API_URL +
          `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );

      response.data.five_day_forecast = forecast.data.list;
      response.data.propable_rain = response.data?.hasOwnProperty("rain")
        ? response.data?.rain["1h"]
        : 0;
      response.data.uvi = response.data?.hasOwnProperty("uvi")
        ? response.data?.uvi
        : 0;

      dispatch({
        type: Constants.GET_WEATHER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: Constants.GET_WEATHER,
        error: errorMessageHandle(error.status),
      });
    }
  };
};

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

export const fetchForeCast = (lat, long) => {
  return async (dispatch) => {
    try {
      const response = await Api.get(
        process.env.REACT_APP_OPENWEATHER_API_URL +
          `/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );

      return response.data;
    } catch (error) {
      dispatch({
        type: Constants.GET_WEATHER,
        error: errorMessageHandle(error.status),
      });

      return {};
    }
  };
};

export const setCities = (cities = []) => {
  return {
    type: Constants.SET_CITIES,
    payload: cities,
  };
};

export const clearItems = () => {
  return {
    type: Constants.CLEAR_ITEMS,
  };
};

export const setCordinate = (cordinate = null) => {
  return {
    type: Constants.SET_CORDINATE,
    payload: cordinate,
  };
};
