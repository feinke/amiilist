import {
  RequestProductsAction,
  REQUEST_PRODUCTS,
  ReceiveProductsAction,
  RECEIVE_PRODUCTS,
} from "../constants/productTypes";
import { Dispatch } from "redux";
import { Item } from "../constants/wishlistTypes";

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
  return fetch("https://www.amiiboapi.com/api/amiibo/?type=Figure");
};

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(requestProducts());
    fetchAmiiboByFigure()
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.amiibo);
        const ami: Item[] = data.amiibo;

        dispatch(receiveProducts(ami.splice(0, 10)));
      });
  };
};
