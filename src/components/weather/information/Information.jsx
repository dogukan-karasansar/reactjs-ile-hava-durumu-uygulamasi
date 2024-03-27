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
  return (
    <div class="w-80 mt-2  p-2 rounded-lg shadow  bg-third">
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-eighth">
          {weather.details.map((detail) => renderList(detail))}
          {/*  <li class="py-3 sm:py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-6 h-6 rounded-full"
                  src={"/weather/informations/cloud.svg"}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-sixth truncat">
                  Probability of rain
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {weather.propable_rain}%
              </div>
            </div>
          </li>

          <li class="py-3 sm:py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-6 h-6 rounded-full"
                  src={"/weather/informations/wind.svg"}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-sixth truncat">Wind speed</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {weather.wind_speed} km/h
              </div>
            </div>
          </li>

          <li class="py-3 sm:py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-6 h-6 rounded-full"
                  src={"/weather/informations/air.svg"}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-sixth truncat">
                  Air humidity
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {weather.air_humidity}%
              </div>
            </div>
          </li>

          <li class="py-3 sm:py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-6 h-6 rounded-full"
                  src={"/weather/informations/uv.svg"}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-sixth truncat">
                  Air humidity
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {weather.uv_index}
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
