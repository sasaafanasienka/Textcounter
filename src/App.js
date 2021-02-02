import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import MainContent from './components/Main/Main';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
        <Header />
        <Route exact path='/'>
            <Main />
        </Route>
        <Route path='/about'>
          <AboutAuthor />
        </Route>
    </div>
  );
}

export default App;