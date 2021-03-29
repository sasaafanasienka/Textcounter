import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; //библиотека для создания маршрутов внутри реакт приложения
import App from './App';
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