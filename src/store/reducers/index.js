import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import moments from "./moments";
import people from "./people";
import places from "./places";
import activities from "./activities";

export default combineReducers({
  auth,
  profile,
  moments,
  people,
  places,
  activities
});
