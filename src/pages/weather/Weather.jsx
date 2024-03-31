import Base from "../../layouts/base";
import { Card } from "../../components/weather/card/Card";
import { Information } from "../../components/weather/information/Information";
import { Feature } from "../../components/weather/feature/Feature";
import { useFetchWeathers } from "../../hooks/use.fetch.weathers";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/forms/button/Button";

export function Weather() {
  const { allWeathers, clearItems } = useFetchWeathers();
  const navigate = useNavigate();

  const styles = (weather) => ({
    banner: {
      background: `url(/weather/backgrounds/${weather?.weather[0].icon}.png)`,
      backgroundSize: "cover",
    },
  });


  return (
    <Base>
      <div className="h-5 m-5">
        <button
          onClick={() => {
            clearItems();
            navigate("/");
          }}
          className="bg-secondary text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>

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
                 <Feature weather={weather} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}
