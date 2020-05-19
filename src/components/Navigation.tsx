import React from 'react';
import {Link} from 'react-router-dom';
import { LogoutContainer } from "../containers/LogoutContainer";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/wishlist">Wishlist</Link>
      </li>
      <li>
        <LogoutContainer />
      </li>
    </ul>
  );
};

export default Navigation;