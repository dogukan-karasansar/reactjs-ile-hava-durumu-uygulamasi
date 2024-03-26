import { useState } from "react";
import Base from "../../layouts/base";
import { Card } from "../../components/weather/card/Card";

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
            <Card weather={weather} />
          </div>
        </div>
      ))}
    </Base>
  );
}
