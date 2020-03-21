const initialState = {
  uid: null,
  name: null,
  email: null
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "get_profile": {
      const { uid, name, email } = action.payload;
      return {
        uid,
        name,
        email
      };
    }
    default:
      return state;
  }
}
