import { gapiSignOut } from "../actions/userActions";
import { connect, ConnectedProps } from "react-redux";
import { LogoutButton } from "../components/LogoutButton";

const mapDispatchToProps = {
  onLogout: gapiSignOut,
};

const connector = connect(null, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

export const LogoutContainer = connector(LogoutButton);