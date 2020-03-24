import * as db from "../db/moments";
import {
  incrementPersonCount,
  createPerson,
  decrementPersonCount
} from "./people";
import {
  incrementPlaceCount,
  createPlace,
  decrementPlaceCount
} from "./places";
import {
  incrementActivityCount,
  createActivity,
  decrementActivityCount
} from "./activities";

const createActions = {
  people: createPerson,
  places: createPlace,
  activities: createActivity
};
const incrementCountActions = {
  people: incrementPersonCount,
  places: incrementPlaceCount,
  activities: incrementActivityCount
};
const decrementCountActions = {
  people: decrementPersonCount,
  places: decrementPlaceCount,
  activities: decrementActivityCount
};

const setLoading = (loading = true) => ({
  type: "set_moments_loading",
  payload: { loading }
});

const setMonth = month => ({
  type: "set_month",
  payload: { month }
});

const setMomentsByMonth = (month, momentsByMonth) => ({
  type: "set_moments_by_month",
  payload: { month, momentsByMonth }
});

const setQuery = (query, queryType) => ({
  type: "set_query",
  payload: { query, queryType }
});

const setMomentsByQuery = (query, queryType, momentsByQuery) => ({
  type: "set_moments_by_query",
  payload: { query, queryType, momentsByQuery }
});

export const fetchMomentsByMonth = month => (dispatch, getState) => {
  if (getState().moments.month === month) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchMomentsByMonth(month).then(data => {
    return dispatch(setMomentsByMonth(month, data));
  });
};

export const fetchMomentsByQuery = (query, type) => (dispatch, getState) => {
  const { moments } = getState();
  if (moments.query === query && moments.queryType === type) {
    return dispatch(setLoading(false));
  }
  dispatch(setLoading());
  return db.fetchMomentsByQuery(query, type).then(data => {
    return dispatch(setMomentsByQuery(query, type, data));
  });
};

const create = created => ({
  type: "create_moment",
  payload: { created }
});

export const createMoment = newMoment => (dispatch, getState) => {
  dispatch(setLoading());
  return db.createMoment(newMoment).then(data => {
    const state = getState();
    ["people", "places", "activities"].forEach(t => {
      newMoment[t].forEach(i => {
        const index = state[t].data.findIndex(({ name }) => name === i);
        if (index >= 0) {
          dispatch(incrementCountActions[t](state[t].data[index].id));
        } else {
          dispatch(createActions[t](i));
        }
      });
    });
    return dispatch(create(data));
  });
};

const update = updated => ({
  type: "update_moment",
  payload: { updated }
});

export const updateMoment = (updated, previous) => (dispatch, getState) => {
  dispatch(setLoading());
  return db.updateMoment(updated).then(() => {
    const state = getState();
    ["people", "places", "activities"].forEach(t => {
      updated[t].forEach(i => {
        if (!previous[t].includes(i)) {
          const index = state[t].data.findIndex(({ name }) => name === i);
          if (index >= 0) {
            dispatch(incrementCountActions[t](state[t].data[index].id));
          } else {
            dispatch(createActions[t](i));
          }
        }
      });
      previous[t].forEach(i => {
        if (!updated[t].includes(i)) {
          const index = state[t].data.findIndex(({ name }) => name === i);
          if (index >= 0) {
            dispatch(decrementCountActions[t](state[t].data[index].id));
          }
        }
      });
    });

    return dispatch(update(updated));
  });
};

const remove = deleted => ({
  type: "delete_moment",
  payload: { deleted }
});

export const deleteMoment = deleted => (dispatch, getState) => {
  dispatch(setLoading());
  return db.deleteMoment(deleted).then(() => {
    const state = getState();
    ["people", "places", "activities"].forEach(t => {
      deleted[t].forEach(i => {
        const index = state[t].data.findIndex(({ name }) => name === i);
        if (index >= 0) {
          dispatch(decrementCountActions[t](state[t].data[index].id));
        }
      });
    });
    return dispatch(remove(deleted));
  });
};

const _setMomentToEdit = momentToEdit => ({
  type: "set_moment_to_edit",
  payload: { momentToEdit }
});

export const setMomentToEdit = momentToEdit => dispatch => {
  return dispatch(_setMomentToEdit(momentToEdit));
};

export const getMomentToEdit = id => dispatch => {
  dispatch(setLoading());
  return db.getMoment(id).then(m => dispatch(_setMomentToEdit(m)));
};
