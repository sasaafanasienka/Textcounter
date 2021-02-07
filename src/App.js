import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import { Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { ThemeContext, themes } from './contexts/ThemeContext'

function App() {

  const [theme, changeTheme] = React.useState('dark');
  const [textValue, changeText] = React.useState('');

  console.log(textValue)

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

          <Route path="*">
            <Redirect to="/" />
          </Route>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;