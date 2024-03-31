import './App.css';
import MainRouters from './router';
import store from './store/index';
import { Provider } from "react-redux";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function App() {

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <MainRouters />
      </AlertProvider>
    </Provider>
  )
}

export default App;
