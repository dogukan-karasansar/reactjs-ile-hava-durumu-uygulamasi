import { useDispatch, useSelector } from "react-redux";
import { fetchCityJsonData, setCities } from "../store/actions/weather.action";
import { useEffect, useMemo, useState } from "react";

export const useFetchCities = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { cityJsonData, cities } = useSelector((state) => state.weather);

  const handleShow = useMemo(() => {
    return cities.length > 0;
  }, [cities]);

  useEffect(() => {
    dispatch(fetchCityJsonData(search));
  }, [search]);

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
