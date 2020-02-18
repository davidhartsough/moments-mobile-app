import * as db from "../db/auth";

const setLoading = (loading = true) => ({
  type: "set_auth_loading",
  payload: { loading }
});

const setLoggedIn = (isLoggedIn = true) => ({
  type: "set_auth",
  payload: { isLoggedIn }
});

export const logIn = () => dispatch => {
  dispatch(setLoading());
  return db.logIn().then(() => dispatch(setLoggedIn(true)));
};

export const logOut = () => dispatch => {
  dispatch(setLoading());
  return db.logOut().then(() => dispatch(setLoggedIn(false)));
};

let hasFetched = false;
export const fetchAuth = () => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchAuth().then(isLoggedIn => {
    hasFetched = true;
    const action = isLoggedIn ? logIn : logOut;
    return dispatch(action());
  });
};