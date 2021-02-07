import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import { Route, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { ThemeContext, themes } from './contexts/ThemeContext'
import { LocalStorage } from './js/localStorage';

function App() {

  const defaultTheme = new LocalStorage()
  const theme = defaultTheme.check()

  const [themeToUse, changeTheme] = React.useState(theme);
  const [textValue, changeText] = React.useState('');

  function rememberTheme(newTheme) {
    changeTheme(newTheme)
    defaultTheme.set(newTheme)
  }

  return (
    <ThemeContext.Provider value={themes[themeToUse]}>

      <div className="App">
          <Header textValue={textValue} onChangeText={changeText}/>

          <Route exact path='/'>
            <Main textValue={textValue} onChangeTheme={rememberTheme} onChangeText={changeText}/>
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