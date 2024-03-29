import * as Constants from "../constants";

export const fetchWeather = (city) => {
  return {
    type: Constants.GET_WEATHER,
    payload: city,
  };
};
