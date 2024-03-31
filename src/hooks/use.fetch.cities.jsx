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
