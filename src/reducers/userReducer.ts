import {
  UserState,
  SessionActionTypes,
  SET_USER_SESSION,
  UNSET_USER_SESSION,
  FETCHING_GAPI,
} from "../constants/userTypes";

const initialState: UserState = {
  id: "",
  isLoggedIn: false,
  isFetching: false
};

export const userReducer = (
  state = initialState,
  action: SessionActionTypes
): UserState => {
  switch (action.type) {
    case SET_USER_SESSION: {
      state = { ...state, id: action.payload, isLoggedIn: true };
      break;
    }
    case UNSET_USER_SESSION: {
      state = { ...state, ...initialState };
      break;
    }
    case FETCHING_GAPI: {
      state = { ...state, isFetching: action.payload };
      break;
    }
  }
  return state;
};
