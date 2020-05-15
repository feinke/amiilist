import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { wishlistReducer } from "./wishlistReducer";

export const reducers = combineReducers({
    userReducer,
    wishlistReducer,
  });

  export type RootState = ReturnType<typeof reducers>;

  