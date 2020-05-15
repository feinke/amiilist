// store details to prevent api calls again
export interface Item {
  head: string;
  tail: string;
  name: string;
  image: string;
}

var sample: Item[] = [
  {head: '111', tail: '2222', name: 'sss', image: 'ssss'}
]


export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export interface AddToWishlistAction {
  type: typeof ADD_TO_WISHLIST;
  payload: Item;
}

export interface RemoveFromWishlistAction {
  type: typeof REMOVE_FROM_WISHLIST,
  payload: number
}

export type WishlistActions = AddToWishlistAction | RemoveFromWishlistAction;