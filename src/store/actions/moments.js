import * as db from "../db/moments";

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

let lastMonthFetched = false;
export const fetchMomentsByMonth = month => dispatch => {
  if (lastMonthFetched === month) return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchMomentsByMonth(month).then(data => {
    hasFetched = true;
    return dispatch(setMomentsByMonth(month, data));
  });
};

let prevQuery = false;
let prevType = false;
export const fetchMomentsByQuery = (query, type) => dispatch => {
  if (prevQuery === query && prevType === type)
    return dispatch(setLoading(false));
  dispatch(setLoading());
  return db.fetchMomentsByQuery(query, type).then(data => {
    prevQuery = query;
    prevType = type;
    return dispatch(setMomentsByQuery(query, type, data));
  });
};

const create = created => ({
  type: "create_moment",
  payload: { created }
});

export const createMoment = name => dispatch => {
  dispatch(setLoading());
  const created = { name, count: 1 };
  return db.createMoment(created).then(data => dispatch(create(data)));
};

const update = updated => ({
  type: "update_moment",
  payload: { updated }
});

export const updateMoment = updated => dispatch => {
  dispatch(setLoading());
  return db.updateMoment(updated).then(() => dispatch(update(updated)));
};

const remove = deleted => ({
  type: "delete_moment",
  payload: { deleted }
});

export const deleteMoment = deleted => dispatch => {
  dispatch(setLoading());
  return db.deleteMoment(deleted).then(() => dispatch(remove(deleted)));
};
