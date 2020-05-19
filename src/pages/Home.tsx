import React from "react";
import { ProductListContainer } from "../containers/ProductListContainer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <ProductListContainer />
    </div>
  );
};

export default Home;
