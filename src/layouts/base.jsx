import { Header } from "./header";

const Base = ({ children }) => {
  return (
    <div  className="container mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Base;
