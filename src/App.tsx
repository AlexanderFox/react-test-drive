import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Users } from 'pages/Users';

const items = [
  { path: '/home', name: 'Home' },
  { path: '/users', name: 'Users' },
]

const Menu = () => {
  return <div>
    { items.map(props => <Link key={props.name} to={props.path}>{props.name}</Link>) }
  </div>
}

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="*" component={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
