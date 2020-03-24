import { setUID } from "../db/fb";

const getProfile = (uid, name, email) => ({
  type: "get_profile",
  payload: { uid, name, email }
});

export const receiveProfile = (uid, name, email) => dispatch => {
  setUID(uid);
  dispatch(getProfile(uid, name, email));
};
