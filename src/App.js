import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import { ThemeContext, themes } from './contexts/ThemeContext'
import { LocalStorage } from './js/localStorage';
import About from './components/About/About';
import Error from './components/Error/Error';

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

        <Switch>

          <Route exact path='/'>
            <Header textValue={textValue} onChangeText={changeText} onlyLogo={false}/> 
            <Main textValue={textValue} onChangeText={changeText}/>
          </Route>

          <Route path='/about-author'>
            <Header onlyLogo={true}/> 
            <About content='about-author'/>
          </Route>

          <Route path='/about-project'>
            <Header onlyLogo={true}/> 
            <About content='about-project'/>
          </Route>

          <Route path='*'>
            <Header onlyLogo={true}/> 
            <Error/>
          </Route>

        </Switch>

      </div>
      
    </ThemeContext.Provider>
  );
}

export default App;