import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
    userReducer,
    wishlistReducer,
    productReducer
  });

  export type RootState = ReturnType<typeof reducers>;

  