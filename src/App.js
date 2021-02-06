import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import MainContent from './components/Main/Main';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { ThemeContext, themes } from './contexts/ThemeContext'

function App() {

  const [theme, changeTheme] = React.useState('dark');
  const [textValue, changeText] = React.useState('');

  return (
    <ThemeContext.Provider value={themes[theme]}> 

      <div className="App">
          <Header textValue={textValue} onChangeText={changeText}/>

          <Route exact path='/'>
            <Main textValue={textValue} onChangeTheme={changeTheme} onChangeText={changeText}/>
          </Route>

          <Route path='/about'>
            <AboutAuthor />
          </Route>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;