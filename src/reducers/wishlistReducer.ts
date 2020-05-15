import { Item, WishlistActions, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/wishlist/types";

const initialState: Item[] = [];

export const wishlistReducer = (
  state = initialState,
  action: WishlistActions
): Item[] => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      state = [...state, action.payload]
      break;
    }
    case REMOVE_FROM_WISHLIST: {
      const newState = [...state];
      newState.splice(action.payload, 1);
      state = [...state];
      break;
    }
  }
  return state;
};
