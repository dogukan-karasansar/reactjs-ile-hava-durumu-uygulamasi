import React from "react";
import moment from "moment";
import { calculateCelsius } from '../../../utils/utilityHelpers';

export const Card = ({ weather }) => {
  console.log(weather);
  return (
    <>
      {/* header alanı */}
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1">
          <div className="text-xl text-white font-bold">
            {weather?.name}, {weather?.sys?.country}
          </div>
          <div className="text-white text-sm font-medium">
            {moment().format("dddd, MMMM DD, YYYY")}
          </div>
        </div>
      </div>

      {/* footer alanı */}
      <div className="grid grid-cols-2 h-60">
        <div className="grid grid-cols-1 gap-1">
          <div className="text-white text-6xl font-bold row-start-3 flex items-end">
            {calculateCelsius(weather?.main?.temp)}°c
          </div>
          <div className="text-white text-md font-bold row-start-4 mx-1">
            <p>
              {calculateCelsius(weather?.main?.temp_min)}°c / {calculateCelsius(weather?.main?.temp_max)}°c
            </p>
            <p className="font-medium">{weather?.weather[0].description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <div className="row-start-1 flex">
            <img src={`/weather/icons/${weather?.weather[0].icon}.svg`} alt="weather icon" />
          </div>
        </div>
      </div>
    </>
  );
};
