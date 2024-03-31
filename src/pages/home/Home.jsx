import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";
import { FormSelect } from "../../components/forms/form-select/FormSelect";
import { Button } from "../../components/forms/button/Button";
import { Header } from "../../components/header/header";

import { useFetchCities } from "../../hooks/use.fetch.cities";
import { useState } from "react";

export function Home() {
  const {
    setSearch,
    cityJsonData,
    cities,
    handleShow,
    handleSetCities,
  } = useFetchCities();

  const [isLoading, setIsLoading] = useState(false);

  


  return (
    <Base>
      <Header />
      <div className="h-80 grid content-center justify-center	">
        <Title />
        <FormSelect
          isMulti={true}
          isLoading={isLoading}
          isSearchable={true}
          value={cities}
          options={cityJsonData ?? []}
          onInputChange={(e) => setSearch(e)}
          onChange={(e) => handleSetCities(e)}
        />


        <Button onClick={() => {
          setTimeout(() => {
            window.location.href = '/weather';
          }, 1000)
        }} title={"Search"} isShow={handleShow} path={'/weather'} />
      </div>
    </Base>
  );
}
