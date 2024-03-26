import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";
import { FormSelect } from "../../components/forms/form-select/FormSelect";
import { Button } from "../../components/forms/button/Button";
import { Header } from "../../components/header/header";

export function Home() {
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
        />
        <Button title={"Search"} isShow={true} />
      </div>
    </Base>
  );
}
