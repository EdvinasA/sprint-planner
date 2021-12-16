import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import "typeface-roboto";
import '@emotion/react';
import '@emotion/styled';
import reportWebVitals from './reportWebVitals';
import sagas from './redux/sagas';
import store, { sagaMiddleware } from './redux/store';

sagaMiddleware.run(sagas);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
