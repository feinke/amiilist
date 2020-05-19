import React from "react";
import { ButtonLink } from "../components/ui/Button";
import {PropsFromRedux} from "../containers/LogoutContainer";

type Props = PropsFromRedux & {};

export const LogoutButton = (props: Props) => {
  const onClickLogout = () => {
    props.onLogout();
  };
  return <ButtonLink onClick={onClickLogout} href="#">Log Out</ButtonLink>;
};
