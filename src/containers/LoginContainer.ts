import { connect, ConnectedProps } from "react-redux";
import { setUserSession } from "../actions/userActions";
import { Login } from "../pages";
import {RootState} from "../reducers";

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = {
  onLogin: setUserSession
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const LoginContainer = connector(Login);