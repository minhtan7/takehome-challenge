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
      console.log("login success, payload:", payload);
      return { ...state, user: payload, isAthenticaed: true, loading: false };
    case "LOGIN_FAIL":
      console.log("login fail, payload:", payload);
      return { ...state, user: null, error: payload, loading: false };

    default:
      return state;
  }
};
export default authReducer;
