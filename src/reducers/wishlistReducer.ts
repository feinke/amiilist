import {
  WishlistState,
  WishlistActions,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../constants/wishlistTypes";

const initialState: WishlistState = {
  items: {}
};
export const wishlistReducer = (
  state = initialState,
  action: WishlistActions
): WishlistState => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const { head, tail, name, image } = action.payload;
      const id = head + tail;
      const items = { ...state.items, [id]: { head, tail, name, image } };
      state = { ...state, items };
      break;
    }
    case REMOVE_FROM_WISHLIST: {
      const items = { ...state.items };
      delete items[action.payload];
      state = { ...state, items };
      break;
    }
  }
  return state;
};
