const initialState = {
  loading: true,
  hasFetched: false,
  data: {}
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "set_profile_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "get_profile": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data
      };
    }
    default:
      return state;
  }
}
