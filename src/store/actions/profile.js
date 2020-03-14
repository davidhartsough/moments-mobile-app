import * as db from "../db/profile";

const setLoading = (loading = true) => ({
  type: "set_profile_loading",
  payload: { loading }
});

const getProfile = data => ({
  type: "get_profile",
  payload: { data }
});

export const fetchProfile = hasFetched => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchProfile().then(data => {
    return dispatch(getProfile(data));
  });
};
