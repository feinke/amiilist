import React, { useEffect } from "react";
import { Item } from "../constants/wishlistTypes";
import { PropsFromRedux } from "../containers/ProductListContainer";
import { ProductItem } from "./ProductItem";

type Props = PropsFromRedux & {};

const ProductList = (props: Props) => {
  useEffect(() => {
    props.fetchProduct();
  }, []);

  const addToWishList = (item: Item) => {
    props.addToWishlist(item);
  };

  return (
    <div>
      {!props.isFetching &&
        props.products.map((product, index) => (
          <ProductItem key={index} item={product}>
            <button onClick={() => addToWishList(product)}>
              Add To Wishlist
            </button>
          </ProductItem>
        ))}
    </div>
  );
};

export default ProductList;
