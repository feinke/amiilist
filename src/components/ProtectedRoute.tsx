import React from "react";
import { Route, Redirect } from "react-router-dom";

type Props = {
  isLoggedIn: boolean | undefined;
  [x:string]: any;
};

const ProtectedRoute = (props: Props) => {
  const { children, isLoggedIn, ...restProps } = props;
  return (
    <>
      {isLoggedIn ? (
        <Route {...restProps}>{children}</Route>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
