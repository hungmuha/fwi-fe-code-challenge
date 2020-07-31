import React from 'react';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import CreatePlayer from './CreatePlayer/CreatePlayer';

const App = () => {
  return (
    <>
      <Header /> 
      <PlayerTable />
      <CreatePlayer/>
    </>
  );
};

export default App;
