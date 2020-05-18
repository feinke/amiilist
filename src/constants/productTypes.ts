import { Item } from "../constants/wishlistTypes";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export interface ProductState {
  products: Item[];
  isFetching: boolean;
} 

export interface ReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  payload: Item[];
}

export interface RequestProductsAction {
  type: typeof REQUEST_PRODUCTS,
}

export type ProductActionTypes = ReceiveProductsAction | RequestProductsAction;
