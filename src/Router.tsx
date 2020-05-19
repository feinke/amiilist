import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home, Wishlist } from "./pages";
import { LoginContainer } from "./containers/LoginContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import { RootState } from "./reducers";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Router = (props: PropsFromRedux) => {
  const { isLoggedIn } = props;
  return (
    <HashRouter>
      <Switch>
        <ProtectedRoute path="/home" isLoggedIn={isLoggedIn} component={Home}>
        </ProtectedRoute>
        <ProtectedRoute
          path="/wishlist"
          isLoggedIn={isLoggedIn}
          component={Wishlist}
        ></ProtectedRoute>
        <Route path="/" component={LoginContainer}></Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;

export const ConnectedRouter = connector(Router);
