import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; //библиотека для создания маршрутов внутри реакт приложения
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/variables.scss'

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer)

render(
  <React.StrictMode>
    <BrowserRouter basename="/Textcounter"> 
      <Provider store={store}>
        <App />
      </Provider>,
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
