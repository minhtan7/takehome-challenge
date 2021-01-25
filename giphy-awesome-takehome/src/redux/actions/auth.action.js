const login = (user) => async (dispatch) => {
  dispatch({ type: "LOADING_REQUEST" });
  try {
    if (!user || !user.email || !user.passWord) {
      console.log("error here", user.email, user.passWord);
      dispatch({ type: "LOGIN_FAIL", payload: "give me all info" });
      return;
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    console.log("pass this login step");
  } catch (error) {
    console.log("error", error);
  }
};

const logOut = (user) => async (dispatch) => {
  dispatch({ type: "LOADING_REQUEST" });
  try {
    if (!user) {
      console.log("error here", user.email, user.passWord);
      dispatch({ type: "LOGOUT_FAIL", payload: "login first" });
      return;
    }
    dispatch({ type: "LOGOUT_SUCCESS", payload: user });
    console.log("pass this logout step");
  } catch (error) {
    console.log("error", error);
  }
};
export const authAction = { login, logOut };
