import React from "react";
import { Item } from "../constants/wishlistTypes";
import { Center, ImageMaxH300 } from "./ui/Utils";
import styled from "styled-components";

export type ProductItemProps = {
  item: Item;
  [x: string]: any;
};

const ProductBox = styled.div`
  margin-bottom: 1.5em;
`;

export const ProductItem = (props: ProductItemProps) => {
  const { item, children } = props;
  return (
    <ProductBox>
      <Center>
        <ImageMaxH300 src={item.image} alt={item.name} />
      </Center>
      <Center>
        {item.name}
      </Center>
      <Center>{children}</Center>
    </ProductBox>
  );
};
