import React from "react";
import moment from "moment";

export const Card = ({ weather }) => {
  return (
    <>
      {/* header alanı */}
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1">
          <div className="text-xl text-white font-bold">
            {weather.city}, {weather.country}
          </div>
          <div className="text-white text-sm font-medium">
            {moment().date(weather.date).format("dddd, MMMM DD, YYYY")}
          </div>
        </div>
      </div>

      {/* footer alanı */}
      <div className="grid grid-cols-2 h-60">
        <div className="grid grid-cols-1 gap-1">
          <div className="text-white text-6xl font-bold row-start-3 flex items-end">
            {weather.temperature}°c
          </div>
          <div className="text-white text-md font-bold row-start-4 mx-1">
            <p>
              {weather.temp_min}°c / {weather.temp_max}°c
            </p>
            <p className="font-medium">{weather.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <div className="row-start-1 flex">
            <img src={weather.icon} alt="weather icon" />
          </div>
        </div>
      </div>
    </>
  );
};
