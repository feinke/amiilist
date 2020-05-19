export interface UserState {
  id: string;
  isFetching: boolean;
  isLoggedIn?: boolean;
}

export const SET_USER_SESSION = "SET_USER_SESSION";
export const UNSET_USER_SESSION = "UNSET_USER_SESSION";
export const FETCHING_GAPI = "FETCHING_GAPI";

export interface SetUserSessionAction {
  type: typeof SET_USER_SESSION;
  payload: string;
}

export interface UnsetUserSessionAction {
  type: typeof UNSET_USER_SESSION;
}

export interface FetchingUserSessionAction {
  type: typeof FETCHING_GAPI;
  payload: boolean;
}

export type SessionActionTypes =
  | SetUserSessionAction
  | UnsetUserSessionAction
  | FetchingUserSessionAction;
