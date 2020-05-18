import {
  UserState,
  SessionActionTypes,
  SET_USER_SESSION,
  UNSET_USER_SESSION,
} from "../constants/userTypes";

const initialState: UserState = {
  email: "",
  isLoggedIn: false,
};

export const userReducer = (
  state = initialState,
  action: SessionActionTypes
): UserState => {
  switch (action.type) {
    case SET_USER_SESSION: {
      state = { ...state, ...action.payload, isLoggedIn: true };
      break;
    }
    case UNSET_USER_SESSION: {
      state = { ...state, ...initialState };
      break;
    }
  }
  return state;
};
