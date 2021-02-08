import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import { Route, useRouteMatch } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { ThemeContext, themes } from './contexts/ThemeContext'
import { LocalStorage } from './js/localStorage';
import About from './components/About/About';

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

            <Route exact path='/Textcounter'>
              <Header textValue={textValue} onChangeText={changeText} onlyLogo={false}/> 
              <Main textValue={textValue} onChangeTheme={rememberTheme} onChangeText={changeText}/>
            </Route>

            <Route path='/Textcounter/about-author'>
              <Header onlyLogo={true}/> 
              <About content='about-author'/>
            </Route>

            <Route path='/Textcounter/about-project'>
              <Header onlyLogo={true}/> 
              <About content='about-project'/>
            </Route>

      </div>
      
    </ThemeContext.Provider>
  );
}

export default App;