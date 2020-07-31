import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import CreatePlayer from './CreatePlayer/CreatePlayer';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route exact path='/' component={PlayerTable}></Route>
        <Route path='/createplayer' component={CreatePlayer}/>
        <Route path='/editplayer/:id' component={CreatePlayer}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
