import { useEffect, useState } from "react";
import { calculateCelsius } from "../../../utils/utilityHelpers";

const renderList = (detail) => {
  return (
    <li class="py-3 sm:py-3">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="w-6 h-6 rounded-full"
            src={`/weather/informations/${detail.key}.svg`}
            alt="Neil image"
          />
        </div>
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-sixth truncat">{detail.label}</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {detail.value}
        </div>
      </div>
    </li>
  );
};

export const Information = ({ weather }) => {
  const [weatherDetails, setDetails] = useState([]);

  useEffect(() => {
    var details = [
      {
        key: "termal_sensation",
        value: calculateCelsius(weather?.main.feels_like) + "ºc",
        label: "Termal Sensation",
      },
      {
        key: "propable_rain",
        value: "80%",
        label: "Probability of rain",
      },
      {
        key: "wind_speed",
        value: weather?.wind.speed + " km/h",
        label: "Wind speed",
      },
      {
        key: "air_humidity",
        value: "80%",
        label: "Air humidity",
      },
      {
        key: "uv_index",
        value: "5",
        label: "UV index",
      },
    ];
    setDetails(details);
  }, []);
  return (
    <div class="w-80 mt-2  p-2 rounded-lg shadow  bg-third">
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-eighth">
          {weatherDetails.map((detail) => renderList(detail))}
        </ul>
      </div>
    </div>
  );
};
