import { ajax } from "rxjs/ajax";
import { mergeMap, map, withLatestFrom } from "rxjs/operators";
import {
  REQUEST_PRODUCTS,
  PENDING_PRODUCTS,
  CANCEL_PRODUCTS,
  ReceiveProductsAction,
  ProductActionTypes,
  PendingProductsAction,
  CancelProductsAction,
} from "../../constants/productTypes";
import {
  receiveProducts,
  shouldFetchProducts,
} from "../../actions/productActions";
import { Epic, ofType } from "redux-observable";
import { GET_BASE_API_FIGURE } from "../../constants/api";
import { Item } from "../../constants/wishlistTypes";
import { RootState } from "../../reducers";

const fetchA = () => {
  return ajax.getJSON(GET_BASE_API_FIGURE).pipe(
    map((response: any) => {
      const items: Item[] = response.amiibo;
      return receiveProducts(items.splice(0, 10));
    })
  );
};

export const shouldFetchEpic: Epic<
  ProductActionTypes,
  PendingProductsAction | CancelProductsAction,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(REQUEST_PRODUCTS),
    withLatestFrom(state$),
    map(([action, state]) => {
      if (shouldFetchProducts(state)) {
        return { type: PENDING_PRODUCTS };
      } else {
        return { type: CANCEL_PRODUCTS };
      }
    })
  );

export const fetchAmiiboEpic: Epic<
  ProductActionTypes,
  ReceiveProductsAction,
  RootState
> = (action$) =>
  action$.pipe(
    ofType(PENDING_PRODUCTS),
    mergeMap(() => {
      return fetchA();
    })
  );
