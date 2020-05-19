import React from "react";
import { PropsFromRedux } from "../containers/LoginContainer";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

type Props = PropsFromRedux & {};

const LoginBox = styled.div`
  padding: 10px;
`;

class Login extends React.Component<Props> {
  componentDidMount() {
    this.props.loadGapi();
  }

  render() {
    const { isLoggedIn, isFetching } = this.props;

    const onClickLogin = () => {
      this.props.onLogin();
    };

    return (
      <LoginBox>
        <div>
          {isLoggedIn && <Redirect to="/home" />}
          {!isFetching && (
            <button onClick={onClickLogin}>Authenticate with Google</button>
          )}
        </div>
      </LoginBox>
    );
  }
}

export default Login;
