import React from "react";
import { Item } from "../constants/wishlistTypes";

export type ProductItemProps = {
  item: Item;
  [x: string]: any;
};

export const ProductItem: React.FC<ProductItemProps> = (props: ProductItemProps) => {
  const { item, children } = props;
  return (<div>
    <img src={item.image} alt={item.name} />
    {children}
  </div>);
};
