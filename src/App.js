import './App.css';
import MainRouters from './router';
import store from './store/index';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <MainRouters />
    </Provider>
  )
}

export default App;
