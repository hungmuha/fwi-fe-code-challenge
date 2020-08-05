import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import CreatePlayer from './CreatePlayer/CreatePlayer';
import EditPlayer from './EditPlayer/EditPlayer';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route exact path='/'>
          <PlayerTable/>
        </Route>
        <Route path='/createplayer'>
          <CreatePlayer/>
        </Route>
        <Route path='/players/:id'>
          <EditPlayer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
