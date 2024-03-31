import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";
import { FormSelect } from "../../components/forms/form-select/FormSelect";
import { Button } from "../../components/forms/button/Button";
import { Header } from "../../components/header/header";

import { useFetchCities } from "../../hooks/use.fetch.cities";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const {
    setSearch,
    cityJsonData,
    cities,
    handleShow,
    handleSetCities,
    cordinate,
    handleCordinate,
    isLoading,
    setIsLoading,
  } = useFetchCities();

  const navigate = useNavigate();

  return (
    !isLoading && (
      <Base>
        <Header />
        <div className="h-80 grid content-center justify-center	">
          <Title />

          <Button
            title={"Use My Location 📍"}
            onClick={() => {
              handleCordinate();
              navigate("/weather");
            }}
            isShow={cordinate ? true : false}
          />
          <div className="mb-2 mt-2">
            <FormSelect
              isMulti={true}
              isLoading={isLoading}
              isSearchable={true}
              value={cities}
              options={cityJsonData ?? []}
              onInputChange={(e) => setSearch(e)}
              onChange={(e) => handleSetCities(e)}
            />
          </div>

          <Button
            onClick={async () => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/weather");
              }, 1000);
            }}
            title={"Search"}
            isShow={handleShow}
          />
        </div>
      </Base>
    )
  );
}
