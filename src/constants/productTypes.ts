import { Item } from "../constants/wishlistTypes";

export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const PENDING_PRODUCTS = "PENDING_PRODUCTS";
export const CANCEL_PRODUCTS = "CANCEL_PRODUCTS";

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

export interface PendingProductsAction {
  type: typeof PENDING_PRODUCTS;
}

export interface CancelProductsAction {
  type: typeof CANCEL_PRODUCTS;
}

export type ProductActionTypes =
  | ReceiveProductsAction
  | RequestProductsAction
  | PendingProductsAction
  | CancelProductsAction;
