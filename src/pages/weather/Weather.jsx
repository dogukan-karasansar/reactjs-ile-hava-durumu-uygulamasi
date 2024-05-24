import Base from "../../layouts/base";
import { Card } from "../../components/weather/card/Card";
import { Information } from "../../components/weather/information/Information";
import { Feature } from "../../components/weather/feature/Feature";
import { useFetchWeathers } from "../../hooks/use.fetch.weathers";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/forms/button/Button";

export function Weather() {
  const { allWeathers, clearItems, styles, navigate } = useFetchWeathers();

  return (
    <Base>
      <div className="h-5 m-5">
        <button
          onClick={() => {
            clearItems();
            navigate("/");
          }}
          className=" w-50 flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white rounded-lg gap-x-2 sm:w-auto dark:hover:bg-secondary dark:bg-secondary hover:bg-gray-100 dark:text-gray-200"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>

      <div className={`grid grid-rows-${allWeathers?.length} gap-4`}>
        {allWeathers.map((weather, index) => (
          <div key={index} className=" h-[100vh] grid">
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
