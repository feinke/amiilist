import React from "react";
import { Item } from "../constants/wishlistTypes";
import { PropsFromRedux } from "../containers/ButtonWishlistContainer";
import { Button } from "./ui/Button";

type Props = PropsFromRedux & {
  item: Item;
};

const ButtonWishlist = (props: Props) => {
  const { item } = props;
  const id = item.head + item.tail;

  const addToWishlist = (item: Item) => {
    const { head, tail, name, image } = item;
    props.addToWishlist({ head, tail, name, image });
  };

  const removeFromWishlist = () => {
    props.removeFromWishlist(id);
  };

  const isInWishlist = (id: string) => {
    const items = props.wishlist.items;
    return !items.hasOwnProperty(id);
  };

  return (
    <>
      {isInWishlist(id) ? (
        <Button onClick={() => addToWishlist(item)}>Add To Wishlist</Button>
      ) : (
        <Button onClick={() => removeFromWishlist()}>Remove To Wishlist</Button>
      )}
    </>
  );
};

export default ButtonWishlist;
