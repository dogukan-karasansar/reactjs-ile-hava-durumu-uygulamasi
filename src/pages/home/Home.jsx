import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";
import { FormSelect } from "../../components/forms/form-select/FormSelect";
import { Button } from "../../components/forms/button/Button";
import { Header } from "../../components/header/header";

import { useFetchCities } from "../../hooks/fetch.cities";

export function Home() {
  const {
    search,
    setSearch,
    cityJsonData,
    cities,
    handleShow,
    handleSetCities,
  } = useFetchCities();

  return (
    <Base>
      <Header />
      <div className="h-80 grid content-center justify-center	">
        <Title />
        <FormSelect
          isMulti={true}
          isLoading={true}
          isSearchable={true}
          value={cities}
          options={cityJsonData ?? []}
          onInputChange={(e) => setSearch(e)}
          onChange={(e) => handleSetCities(e)}
        />


        <Button title={"Search"} isShow={handleShow} />
      </div>
    </Base>
  );
}
