import { UserState, SetUserSessionAction, SET_USER_SESSION, UnsetUserSessionAction, UNSET_USER_SESSION } from "./types";

export const setUserSession = (user: UserState): SetUserSessionAction => {
  return {
    type: SET_USER_SESSION,
    payload: user,
  };
};

export const unsetUserSession = (): UnsetUserSessionAction => {
  return {
    type: UNSET_USER_SESSION
  }
}