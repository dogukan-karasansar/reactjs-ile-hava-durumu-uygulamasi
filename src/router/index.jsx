import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/* Pages */
import { Home } from "../pages/home/Home";
import { Weather } from "../pages/weather/Weather";
import { Error } from "../pages/error/Error";

const MainRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:country/:city" element={<Weather />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default MainRouters;
