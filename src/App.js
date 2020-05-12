import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AnimeList from './components/AnimeSeason/index'
import 'antd/dist/antd.css';
import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/season" component={AnimeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
