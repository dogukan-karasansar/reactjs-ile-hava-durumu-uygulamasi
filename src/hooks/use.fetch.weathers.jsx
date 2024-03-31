import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/actions/weather.action";
import { useAlert } from "react-alert";

export const useFetchWeathers = () => {
  const dispatch = useDispatch();
  const { cities, cityWeather, error, cordinate } = useSelector((state) => state.weather);
  const [allWeathers, setAllWeathers] = useState([]);
  const alert = useAlert();

  const getWeatherFromCity = () => {
    if (cities.length === 0) return;
    cities.map(async (city) => {
      dispatch(fetchWeather({ city: city }));
    });
  };

  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
    setAllWeathers([]);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (cordinate) {
      dispatch(fetchWeather({ lantude: cordinate.lat, lontude: cordinate.long }));
    }
  }, [cordinate]);

  useEffect(() => {
    if (cityWeather) {
      setAllWeathers((prev) => {
        var prev = prev.filter((item) => item.name !== cityWeather.name);
        return [...prev, cityWeather];
      });
    }
  }, [cityWeather]);

  useEffect(() => {
    getWeatherFromCity();
  }, []);

  return {
    allWeathers,
    clearItems,
  };
};
