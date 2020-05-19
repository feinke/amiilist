import React from "react";
import styled from "styled-components";
const Hamburger = styled.div`
  width: 25px;
`;
const Ham = styled.div`
  height: 3px;
  width: 100%;
  background: black;
  margin-bottom: 2px;
`;
type MenuProps = {
  [x:string]: any;
  onClick: () => void;
};

const Menu = (props: MenuProps) => {
  const {onClick, ...restProps} = props;
  return (
    <Hamburger onClick={onClick} {...restProps}>
      <Ham />
      <Ham />
      <Ham />
    </Hamburger>
  );
};

export default Menu;
