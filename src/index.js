import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //библиотека для создания маршрутов внутри реакт приложения
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';
import App from './App';

import './index.css';
import './styles/variables.scss'

const store = createStore(rootReducer, applyMiddleware(thunk))

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