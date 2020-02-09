import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles/App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './Components/ProductList';
import RandomSongShuffle from './Components/RandomSongShuffle';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <ProductList /> } />
          <Route exact path="/random-shuffle" render={() => <RandomSongShuffle />} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
