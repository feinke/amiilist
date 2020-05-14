import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login, Home, Wishlist } from './pages';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;