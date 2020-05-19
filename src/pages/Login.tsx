import React, { useEffect } from "react";
import { PropsFromRedux } from "../containers/LoginContainer";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

type Props = PropsFromRedux & {};

const LoginBox = styled.div`
  padding: 10px;
`;

const Login = (props: Props) => {
  useEffect(props.loadGapi, []);

  const onClickLogin = () => {
    props.onLogin();
  };

  return (
    <LoginBox>
      <div>
        {props.isLoggedIn && <Redirect to="/home" />}
        {!props.isFetching && (
          <button onClick={onClickLogin}>Authenticate with Google</button>
        )}
      </div>
    </LoginBox>
  );
};

export default Login;
