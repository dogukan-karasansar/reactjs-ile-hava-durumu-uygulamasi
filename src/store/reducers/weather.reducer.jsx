import * as Constants from "../constants";

const initialState = {
  weather: [],
  cityJsonData: [],
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
    default:
      return state;
  }
}