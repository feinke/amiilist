import {
  ProductState,
  ProductActionTypes,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  PENDING_PRODUCTS,
  CANCEL_PRODUCTS,
} from "../constants/productTypes";

const initialState: ProductState = {
  products: [],
  isFetching: false
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      state = { ...state };
      break;

    case PENDING_PRODUCTS:
      state = { ...state, isFetching: true };
      break;

    case RECEIVE_PRODUCTS:
      state = { ...state, products: action.payload, isFetching: false };
      break;

    case CANCEL_PRODUCTS:
      state = { ...state, isFetching: false };
      break;
  }

  return state;
};
