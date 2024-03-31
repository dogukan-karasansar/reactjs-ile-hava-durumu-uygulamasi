import { useDispatch, useSelector } from "react-redux";
import {
  fetchCityJsonData,
  setCities,
  setCordinate,
} from "../store/actions/weather.action";
import { useEffect, useMemo, useState } from "react";
import { useAlert } from "react-alert";
import { useLocation } from "../utils/location";

export const useFetchCities = () => {
  const dispatch = useDispatch();
  const cordinate = useLocation();

  const alert = useAlert();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { cityJsonData, cities, error } = useSelector((state) => state.weather);

  const handleShow = useMemo(() => {
    return cities.length > 0;
  }, [cities]);

  useEffect(() => {
    dispatch(fetchCityJsonData(search));
  }, [search]);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert.error("Geolocation is not supported by this browser.");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSetCities = (cities) => {
    dispatch(setCities(cities));
  };

  const handleCordinate = () => {
    dispatch(
      setCordinate({
        lat: cordinate.latitude,
        long: cordinate.longitude,
      })
    );
  };

  return {
    search,
    setSearch,
    cityJsonData,
    cities,
    handleShow,
    handleSetCities,
    cordinate,
    handleCordinate,
    isLoading,
    setIsLoading,
  };
};
