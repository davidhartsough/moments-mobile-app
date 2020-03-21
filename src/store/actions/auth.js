import * as db from "../db/auth";
import { receiveProfile } from "./profile";

const setLoading = (loading = true) => ({
  type: "set_auth_loading",
  payload: { loading }
});

const setLoggedIn = (isLoggedIn = true) => ({
  type: "set_auth",
  payload: { isLoggedIn }
});

export const logIn = () => dispatch => {
  dispatch(setLoggedIn(true));
};

export const logOut = () => dispatch => {
  dispatch(setLoggedIn(false));
};

export const signOut = () => dispatch => {
  dispatch(setLoading());
  return db.logOut().then(() => {
    dispatch({ type: "CLEAR_STATE_RESET" });
    return dispatch(logOut());
  });
};

export const fetchAuth = () => dispatch => {
  dispatch(setLoading());
  return db.fetchAuth().then(isLoggedIn => {
    const action = isLoggedIn ? logIn : logOut;
    return dispatch(action());
  });
};

export const handleAuth = user => dispatch => {
  if (user) {
    dispatch(receiveProfile(user.uid, user.displayName, user.email));
    return dispatch(logIn());
  } else {
    return dispatch(logOut());
  }
};
