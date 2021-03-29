import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import About from './components/About/About';
import Error from './components/Error/Error';

function App() {

  const [textValue, changeText] = React.useState('');

  return (
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
      
  );
}

export default App;