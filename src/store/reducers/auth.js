const initialState = {
  loading: true,
  isLoggedIn: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "set_auth_loading": {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case "set_auth": {
      const { isLoggedIn } = action.payload;
      return {
        loading: false,
        isLoggedIn
      };
    }
    default:
      return state;
  }
}
