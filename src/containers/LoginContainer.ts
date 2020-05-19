import { connect, ConnectedProps } from "react-redux";
import { loadGapi, gapiSignIn, gapiSignOut } from "../actions/userActions";
import { Login } from "../pages";
import {RootState} from "../reducers";

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  isFetching: state.userReducer.isFetching,
});

const mapDispatchToProps = {
  loadGapi: loadGapi,
  onLogin: gapiSignIn,
  onLogOut: gapiSignOut,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const LoginContainer = connector(Login);