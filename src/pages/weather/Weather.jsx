import { useState } from "react";
import Base from "../../layouts/base";
import moment from "moment";

export function Weather() {
  const [weathers, setWeathers] = useState([
    {
      id: 1,
      country: "TR",
      city: "Istanbul",
      date: "2021-09-01",
      temperature: "25",
      weather: "Rain",
      description: "Light rain",
      icon: "/weather/icons/10d.svg",
      banner: "/weather/backgrounds/10d.png",
      temp_min: "22",
      temp_max: "28",
    },
  ]);

  const styles = (weather) => ({
    banner: {
      background: `url(${weather.banner})`,
      backgroundSize: "cover",
    },
    icon: {
      background: `url(${weather.icon})`,
      backgroundSize: "cover",
    },
  });

  return (
    <Base>
      {weathers.map((weather) => (
        <div className="h-80 grid content-center justify-center mt-2">
          <div
            className="box-border h-72 w-80 p-4 rounded-xl bg-white shadow-lg"
            style={styles(weather).banner}
          >
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
          </div>
        </div>
      ))}
    </Base>
  );
}
