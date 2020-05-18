import React from "react";
import Navigation from "../components/Navigation";
import { PropsFromRedux } from "../containers/LoginContainer";

type Props = PropsFromRedux & {};

const Login: React.FunctionComponent<Props> = (props: PropsFromRedux) => {
  const onClickLogin = () => {
    props.onLogin({ email: "accc@a.com" });
  };
  return (
    <div>
      <Navigation />
      <div>
        i am login?
        {props.isLoggedIn ? <>Yes</> : <>No</>}
        <button onClick={onClickLogin}>Login</button>
      </div>

      <div>
      </div>
    </div>
  );
};

export default Login;
