// store details to prevent api calls again
export interface Item {
  head: string;
  tail: string;
  name: string;
  image: string;
}

export interface Wishlist {
  [K: string] : Item
}

export interface WishlistState {
  items: Wishlist
}

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export interface AddToWishlistAction {
  type: typeof ADD_TO_WISHLIST;
  payload: Item;
}

export interface RemoveFromWishlistAction {
  type: typeof REMOVE_FROM_WISHLIST;
  payload: string;
}

export type WishlistActions = AddToWishlistAction | RemoveFromWishlistAction;
