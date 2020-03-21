//import * as db from "../db/profile";
/*
const setLoading = (loading = true) => ({
  type: "set_profile_loading",
  payload: { loading }
});
*/
const getProfile = (uid, name, email) => ({
  type: "get_profile",
  payload: { uid, name, email }
});

export const receiveProfile = (uid, name, email) => dispatch => {
  dispatch(getProfile(uid, name, email));
};

/*
export const fetchProfile = () => (dispatch, getState) => {
  const { hasFetched } = getState().profile;
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchProfile().then(({ uid, name }) => {
    return dispatch(getProfile(uid, name));
  });
};
*/
