import { combineReducers } from 'redux';
import weatherReducer from './weather.reducer';

const reducer = combineReducers({
    weather: weatherReducer,
});

export default reducer;