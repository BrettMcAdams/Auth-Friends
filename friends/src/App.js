import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login'
import MyFriends from './components/MyFriends';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={MyFriends} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
