import moment from "moment";

const renderFeature = (forecast) => {
  return (
    <div className="flex flex-col items-center m-2">
      <p className="text-sm font-medium text-sixth">
        {moment(forecast.day).format("ddd")}
      </p>
      <img
        className="w-12 h-12 rounded-full"
        src={forecast.icon}
        alt="Neil image"
      />
      <p className="text-sm font-medium text-white">{forecast.max}°c</p>
      <p className="text-sm font-medium text-seventh">{forecast.min}°c</p>
    </div>
  );
};

export const Feature = ({ weather }) => {
  return (
    <div className="w-80 h-auto mt-2  p-2 rounded-lg shadow bg-third">
      <div className="grid grid-cols-5 gap-4">
        {weather.five_day_forecast.map((forecast) => renderFeature(forecast))}
      </div>
    </div>
  );
};
