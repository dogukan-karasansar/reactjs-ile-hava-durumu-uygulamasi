import { useDispatch, useSelector } from "react-redux";
import { fetchCityJsonData, setCities } from "../store/actions/weather.action";
import { useEffect, useMemo, useState } from "react";
import { useAlert } from 'react-alert'

export const useFetchCities = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [search, setSearch] = useState("");
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


  return {
    search,
    setSearch,
    cityJsonData,
    cities,
    handleShow,
    handleSetCities,
  };
};
