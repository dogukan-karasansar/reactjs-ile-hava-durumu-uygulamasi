import Base from "../../layouts/base";
import { Title } from "../../components/title/Title";

export function Home() {
  return (
    <Base>
      <div className="h-80 grid content-center justify-center	">
        <Title />
      </div>
    </Base>
  );
}
