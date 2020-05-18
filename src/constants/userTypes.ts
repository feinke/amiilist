export interface UserState {
  email: string;
  isLoggedIn?: boolean;
}

export const SET_USER_SESSION = "SET_USER_SESSION";
export const UNSET_USER_SESSION = "UNSET_USER_SESSION";

export interface SetUserSessionAction {
  type: typeof SET_USER_SESSION;
  payload: UserState;
}

export interface UnsetUserSessionAction {
  type: typeof UNSET_USER_SESSION;
}

export type SessionActionTypes = SetUserSessionAction | UnsetUserSessionAction;
