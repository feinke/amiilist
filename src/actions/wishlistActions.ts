import {
  Item,
  AddToWishlistAction,
  ADD_TO_WISHLIST,
  RemoveFromWishlistAction,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishlistTypes";

export const addToWishlist = (item: Item): AddToWishlistAction => {
  return {
    type: ADD_TO_WISHLIST,
    payload: item,
  };
};

export const removeFromWishlist = (id: string): RemoveFromWishlistAction => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  };
};
