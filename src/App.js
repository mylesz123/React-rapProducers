import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles/App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './Components/ProductList';
import RandomSongShuffle from './Components/RandomSongShuffle';
import Tester from './Components/Tester';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <ProductList /> } />
          <Route exact path="/random-shuffle" render={() => <RandomSongShuffle />} />
          <Route exact path="/tester" render={() => <Tester />} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
