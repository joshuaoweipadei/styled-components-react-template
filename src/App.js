import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
