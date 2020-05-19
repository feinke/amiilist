import {
  SetUserSessionAction,
  FetchingUserSessionAction,
  UnsetUserSessionAction,
  SET_USER_SESSION,
  UNSET_USER_SESSION,
  FETCHING_GAPI,
} from "../constants/userTypes";
import { GAPI_KEY, GCLIENT_ID } from "../constants/api";
import { Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

const SCOPE = "email";

export const setUserSession = (user: string): SetUserSessionAction => {
  return {
    type: SET_USER_SESSION,
    payload: user,
  };
};

export const unsetUserSession = (): UnsetUserSessionAction => {
  return {
    type: UNSET_USER_SESSION,
  };
};

const pending = (payload: boolean): FetchingUserSessionAction => {
  return {
    type: FETCHING_GAPI,
    payload,
  };
};

const isGapiAuthorized = () => {
  const googleAuth = gapi.auth2.getAuthInstance();
  const user = googleAuth.currentUser.get();
  return user.hasGrantedScopes(SCOPE);
};

const gapiGetCurrentUserId = () => {
  const googleAuth = gapi.auth2.getAuthInstance();
  const user = googleAuth.currentUser.get();

  if (isGapiAuthorized()) {
    return user.getId();
  } else {
    return "";
  }
};

const initGapi = () => {
  return gapi.client.init({
    apiKey: GAPI_KEY,
    clientId: GCLIENT_ID,
    scope: SCOPE,
  });
};

const loadGapiAuth2 = () => {
  return new Promise<string>((resolve, reject) => {
    gapi.load("client:auth2", () => {
      initGapi()
        .then(() => {
          const currentUser = gapiGetCurrentUserId();
          resolve(currentUser);
        })
        .catch((err) => {
          console.error(err);
          reject("");
        });
    });
  });
};

export const thunkSetGoogleUser = (): ThunkAction<
  void,
  RootState,
  null,
  Action
> => async (dispatch) => {
  dispatch(pending(true));
  const currentUser = await loadGapiAuth2();
  if (currentUser !== "") {
    dispatch(setUserSession(currentUser));
  }
  dispatch(pending(false));

};

/** !!!! DEPRECATED!!!! */
export const loadGapi = () => {
  return (dispatch: Dispatch) => {
    dispatch(pending(true));
    gapi.load("client:auth2", () => {
      initGapi()
        .then(() => {
          dispatch(pending(false));
          const currentUser = gapiGetCurrentUserId();
          if (currentUser !== null) {
            dispatch(setUserSession(currentUser));
          }
        })
        .catch((err) => console.error(err));
    });
  };
};

export const gapiSignIn = () => {
  return (dispatch: Dispatch) => {
    const googleAuth = gapi.auth2.getAuthInstance();
    const currentUser = gapiGetCurrentUserId();
    if (currentUser === "") {
      googleAuth.signIn().then(
        (user) => {
          dispatch(setUserSession(user.getId()));
        },
        (err) => console.error("why u close dis")
      );
    }
  };
};

export const gapiSignOut = () => {
  return (dispatch: Dispatch) => {
    gapi.auth2
      .getAuthInstance()
      .signOut()
      .then(() => {
        dispatch(unsetUserSession());
      });
  };
};
