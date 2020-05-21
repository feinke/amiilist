import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";
import { productReducer } from "./productReducer";
import { combineEpics } from "redux-observable";
import {
  shouldFetchEpic,
  fetchAmiiboEpic,
} from "../store/epics/fetchAmiiboEpic";

export const rootEpic = combineEpics(shouldFetchEpic, fetchAmiiboEpic);

export const reducers = combineReducers({
  userReducer,
  wishlistReducer,
  productReducer,
});

export type RootState = ReturnType<typeof reducers>;
export type RootEpic = ReturnType<typeof rootEpic>;
