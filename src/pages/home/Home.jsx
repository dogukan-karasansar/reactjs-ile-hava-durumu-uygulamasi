import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";
import { FormSelect } from "../../components/forms/form-select/FormSelect";
import { Button } from "../../components/forms/button/Button";
import { Header } from "../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityJsonData } from "../../store/actions/weather.action";
import { useEffect, useMemo, useState } from "react";

export function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);
  const { weather } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchCityJsonData(search));
  }, [search]);

  return (
    <Base>
      <Header />
      <div className="h-80 grid content-center justify-center	">
        <Title />
        <FormSelect
          isMulti={true}
          isLoading={true}
          isClearable={true}
          isSearchable={true}
          options={weather}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button title={"Search"} />
      </div>
    </Base>
  );
}
