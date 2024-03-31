import Base from "../../layouts/base";
import { Card } from "../../components/weather/card/Card";
import { Information } from "../../components/weather/information/Information";
import { Feature } from "../../components/weather/feature/Feature";
import { useFetchWeathers } from "../../hooks/use.fetch.weathers";

export function Weather() {
  const { allWeathers } = useFetchWeathers();
 /*  const [weathers, setWeathers] = useState([
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
      details: [
        {
          key: "termal_sensation",
          value: "25ºc",
          label: "Termal Sensation",
        },
        {
          key: "propable_rain",
          value: "80%",
          label: "Probability of rain",
        },
        {
          key: "wind_speed",
          value: "2 km/h",
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
      ],
      five_day_forecast: [
        {
          day: "2021-09-01",
          min: "22",
          max: "28",
          icon: "/weather/icons/10d.svg",
        },
        {
          day: "2021-09-02",
          min: "22",
          max: "28",
          icon: "/weather/icons/10d.svg",
        },
        {
          day: "2021-09-03",
          min: "22",
          max: "28",
          icon: "/weather/icons/10d.svg",
        },
        {
          day: "2021-09-04",
          min: "22",
          max: "28",
          icon: "/weather/icons/10d.svg",
        },
        {
          day: "2021-09-05",
          min: "22",
          max: "28",
          icon: "/weather/icons/10d.svg",
        },
      ],
    },
  ]); */

  const styles = (weather) => ({
    banner: {
      background: `url(/weather/backgrounds/${weather?.weather[0].icon}.png)`,
      backgroundSize: "cover",
    },
  });

  console.log(allWeathers);

  return (
    <Base>
      <div className={`grid grid-rows-${allWeathers?.length} gap-4`}>
        {allWeathers.map((weather, index) => (
          <div className=" h-svh grid">
            <div
              key={index}
              className="h-80 grid content-center justify-center"
            >
              <div className="flex flex-col h-56">
                <div
                  className="box-border h-72 w-80 p-4 rounded-xl bg-white shadow-lg"
                  style={styles(weather).banner}
                >
                  <Card weather={weather} />
                </div>
                <Information weather={weather} />
               {/*  <Feature weather={weather} /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}
