import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles/App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RapperList from './Components/RapperList';
import RandomSongShuffle from './Components/RandomSongShuffle';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RapperList} />
        <Route exact path="/random-shuffle" component={RandomSongShuffle} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
