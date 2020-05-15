import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login, Home, Wishlist } from './pages';
import { LoginLink } from './containers/LoginContainer';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/" component={LoginLink}></Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;