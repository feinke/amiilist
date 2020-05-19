import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoutContainer } from "../containers/LogoutContainer";
import { ButtonLink } from "../components/ui/Button";

const ListStyleNone = styled.ul`
  list-style: none;
  margin:5px;
  padding:0;
`;

type NavState = {
  isOpen: boolean;
}

class Navigation extends React.Component<{}, NavState> {
  readonly state: NavState = {
    isOpen: false,
  };

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <ListStyleNone>
          <li>
            <ButtonLink as={Link} to="/home">
              Home
            </ButtonLink>
          </li>
          <li>
            <ButtonLink as={Link} to="/wishlist">
              Wishlist
            </ButtonLink>
          </li>
          <li>
            <LogoutContainer />
          </li>
        </ListStyleNone>
      </>
    );
  }
}

export default Navigation;