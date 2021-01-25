const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      console.log("payload", payload);
      localStorage.setItem(
        "users",
        JSON.stringify({
          ...state,
          user: payload,
          isAuthenticated: true,
        })
      );
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case "LOGIN_FAIL":
      console.log("payload", payload);
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: payload,
        loading: false,
      };
    case "LOGOUT_SUCCESS":
      return { ...state, user: null, isAuthenticated: false, loading: false };
    case "LOGOUT_FAIL":
      return state;

    default:
      return state;
  }
};

export default authReducer;
