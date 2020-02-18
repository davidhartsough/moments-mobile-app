import * as db from "../db/profile";

const setLoading = (loading = true) => ({
  type: "set_profile_loading",
  payload: { loading }
});

const getProfile = data => ({
  type: "get_profile",
  payload: { data }
});

let hasFetched = false;
export const fetchProfile = () => dispatch => {
  if (hasFetched) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchProfile().then(data => {
    hasFetched = true;
    return dispatch(getProfile(data));
  });
};
