import * as Constants from "../constants";

const initialState = {
  weather: [],
  cityJsonData: [],
  cities: [],
  error: "",
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
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
    default:
      return state;
  }
}
