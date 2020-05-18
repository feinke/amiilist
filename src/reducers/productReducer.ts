import {
  ProductState,
  ProductActionTypes,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
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
      state = { ...state, isFetching: true};
      break;

    case RECEIVE_PRODUCTS:
      state = { ...state, products: action.payload, isFetching: false };
      break;
  }

  return state;
};
