import * as Constants from "../constants";

const initialState = {
  cityWeather: null,
  cityJsonData: [],
  cities: [],
  cordinate: null,
  error: "",
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_WEATHER:
      return {
        ...state,
        cityWeather: action.payload,
        error: action.error,
      };
    case Constants.GET_CITY_JSON_DATA:
      return {
        ...state,
        cityJsonData: action.payload,
        error: action.error,
      };
    case Constants.SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case Constants.SET_CORDINATE:
      return {
        ...state,
        cordinate: action.payload,
      };
    case "CLEAR_ITEMS":
      return {
        ...state,
        cities: [],
        cityWeather: null,
        cordinate: null,
        error: "",
      };
    default:
      return state;
  }
}
