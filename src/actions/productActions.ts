import {
  RequestProductsAction,
  REQUEST_PRODUCTS,
  ReceiveProductsAction,
  RECEIVE_PRODUCTS,
} from "../constants/productTypes";
import { Dispatch } from "redux";
import { Item } from "../constants/wishlistTypes";
import { GET_BASE_API_FIGURE } from "../constants/api";
import { RootState } from "../reducers";

export const requestProducts = (): RequestProductsAction => {
  return {
    type: REQUEST_PRODUCTS,
  };
};

export const receiveProducts = (products: Item[]): ReceiveProductsAction => {
  return {
    type: RECEIVE_PRODUCTS,
    payload: products,
  };
};

const fetchAmiiboByFigure = () => {
  return fetch(GET_BASE_API_FIGURE);
};

const shouldFetchProducts = (state: RootState) => {
  const { products, isFetching } = state.productReducer;
  if (products.length) {
    return false;
  } else if (isFetching) {
    return false;
  } else {
    return true;
  }
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestProducts());
    const fetchResponse = await fetchAmiiboByFigure();
    const data = await fetchResponse.json();
    const ami: Item[] = await data.amiibo;
    //there's a lot of amiiboo, take first 10
    return dispatch(receiveProducts(ami.splice(0, 10)));
  };
};

export const fetchProductsIfNeeded = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    if (shouldFetchProducts(getState())) {
      //need to find a way to not use any
      return dispatch<any>(fetchProducts());
    }
  };
};
