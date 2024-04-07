import moment from "moment";
import { useEffect, useState } from "react";
import { calculateCelsius } from "../../../utils/utilityHelpers";

const renderFeature = (forecast, index) => {
  return (
    <div key={index} className="flex flex-col items-center m-2">
      <p className="text-sm font-medium text-sixth">
        {moment(forecast.dt_txt).format("ddd")}
      </p>
      <img
        className="w-12 h-12 rounded-full"
        src={`/weather/icons/${forecast?.weather[0].icon}.svg`}
        alt="Neil image"
      />
      <p className="text-sm font-medium text-white">
        {calculateCelsius(forecast.main.temp_max)}°c
      </p>
      <p className="text-sm font-medium text-seventh">
        {calculateCelsius(forecast.main.temp_min)}°c
      </p>
    </div>
  );
};

export const Feature = ({ weather }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    var features = weather.five_day_forecast.map((forecast) => {
      forecast.dt_txt = moment(forecast.dt_txt).format("YYYY-MM-DD");
      return forecast;
    });

    features = features
      .reduce((acc, forecast) => {
        const index = acc.findIndex((f) => f.dt_txt === forecast.dt_txt);
        if (index === -1) {
          acc.push(forecast);
        } else {
          if (forecast.main.temp_max > acc[index].main.temp_max) {
            acc[index] = forecast;
          }
        }
        return acc;
      }, [])
      .slice(0, -1);

    setFeatures(features);
  }, [weather]);

  return (
    <div className="w-80 h-auto mt-2  p-2 rounded-lg shadow bg-third">
      <div className="grid grid-cols-5 gap-4">
        {features.map((forecast, index) => renderFeature(forecast, index))}
      </div>
    </div>
  );
};
