import './App.scss';
import MainContent from './components/MainContent/MainContent';
import { Route,  Switch } from 'react-router-dom';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <MainContent />
        </Route>
        <Route exact path='/about'>
          <AboutAuthor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;