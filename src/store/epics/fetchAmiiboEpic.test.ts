import { fetchAmiiboEpic, shouldFetchEpic } from "./fetchAmiiboEpic";
import * as types from "../../constants/productTypes";
import { TestScheduler } from "rxjs/testing";
import { GET_BASE_API_FIGURE } from "../../constants/api";
import { Epic, ActionsObservable, StateObservable, ofType } from "redux-observable";
import { RootState } from "../../reducers";
import { of, Subject } from "rxjs";
import { Action } from "redux";
import { productReducer } from "../../reducers/productReducer";

type ActionType<T = any> = Action[keyof Action]


const makeEpicTest = <A extends Action<any>, O extends A, S, C, D>(
  epic: Epic<A, O, S, D>,
  initialState: S,
  action: A[keyof A],
  dependencies: D
) => {
  // const initialState: S = (null as unknown) as S;
  const action$: ActionsObservable<any> = ActionsObservable.of({
    type: action,
  });
  // const emitAction = actionSubject$.next.bind(action$);

  const stateSubject$ = new Subject<S>();
  // const stateObservable$ = new StateObservable(stateSubject$, initialState);
  // const emitState = stateSubject$.next.bind(stateObservable$);
  const stateObservable$: StateObservable<S> = new StateObservable(
    stateSubject$,
    initialState
  );
  const results: A[] = [];
  const epic$ = epic(action$, stateObservable$, dependencies);

  // epic$.subscribe((o) => {
  //   results.push(o);
  // });

  return epic$;
};
const testScheduler = new TestScheduler((actual, expected) => {
  // expect(actual).toHaveProperty(expected);
});

const initialState: RootState = {
  productReducer: {
    products: [],
    isFetching: false,
  },
  userReducer: {
    id: "",
    isLoggedIn: false,
    isFetching: false,
  },
  wishlistReducer: { items: {} },
};



const rootState$ = new Subject<RootState>();

const initialState$: StateObservable<RootState> = new StateObservable(
  rootState$,
  initialState
);

//observable stream of dispatching action
const pendingAction$: ActionsObservable<types.ProductActionTypes> = ActionsObservable.of(
  {
    type: types.PENDING_PRODUCTS,
  }
);

const requestAction$: ActionsObservable<types.ProductActionTypes> = ActionsObservable.of(
  {
    type: types.REQUEST_PRODUCTS,
  }
);

describe("fetch?", () => {
  it("should return 10 amiibos", async () => {
    const response = {
      amiibo: [],
    };

    //fake client to return fake response
    const fakeClient = jest.fn().mockReturnValue(Promise.resolve(response));

    //pass action$ to epic and inject fake client
    const output$ = fetchAmiiboEpic(pendingAction$, initialState$, {
      fakeClient,
    });

    const result = await output$.toPromise();
    // expect(result).toEqual({
    //   type: types.RECEIVE_PRODUCTS,
    //   payload: []
    // })
    expect(result.payload).toHaveLength(10);
    // expect(result).toHaveProperty("type", types.RECEIVE_PRODUCTS)
  });

  it("should fetch if empty", async () => {
    const output$ = shouldFetchEpic(requestAction$, initialState$, {});
    const result = await output$.toPromise();
    expect(result).toEqual({
      type: types.PENDING_PRODUCTS,
    });
  });

  it("should not fetch if has products", async () => {
    const fakeproducts = {
      productReducer: {
        products: [
          {
            head: "1",
            tail: "2",
            name: "3",
            image: "4",
          },
        ],
        isFetching: false,
      },
    };
    const state = { ...initialState, ...fakeproducts };

    const state$ = new Subject<RootState>();
    const stateob$: StateObservable<RootState> = new StateObservable(
      state$,
      state
    );
    
    const output$ = shouldFetchEpic(requestAction$, stateob$, {});
    const result = await output$.toPromise();
    expect(result).toEqual({
      type: types.CANCEL_PRODUCTS,
    });
  });

  it("should fetch if empty 2", async () => {

    const state = {
      ...initialState,
      productReducer: {
        ...initialState.productReducer,
        products: [
          {
            head: "1",
            tail: "2",
            name: "3",
            image: "4",
          },
        ],
      },
    };


    const output$ = makeEpicTest(shouldFetchEpic, state, types.REQUEST_PRODUCTS, {});
    const result = await output$.toPromise();
    expect(result).toEqual({
      type: types.CANCEL_PRODUCTS,
    });
  });

  /*it("should fetch", () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot("-a", {
        a: {
          type: types.PENDING_PRODUCTS,
        },
      });
      const state$ = null;

      const dependencies = {
        getJSON: (url: string) =>
          cold("--a", {
            a: { url },
          }),
      };
      const output$ = fetchAmiiboEpic(action$, state$, dependencies);

      expectObservable(output$).toBe("---a", {
        a: {
          type: types.RECEIVE_PRODUCTS,
          response: {
            url: GET_BASE_API_FIGURE,
          },
        },
      });
    });
  });*/
});
