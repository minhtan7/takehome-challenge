const login = (user) => async (dispatch) => {
  dispatch({ type: "LOADING_REQUEST" });
  try {
    if (!user || !user.email || !user.passWord) {
      console.log("error here");
      dispatch({ type: "LOGIN_FAIL", payload: "give me all info" });
      return;
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    console.log("pass this login step");
  } catch (error) {
    console.log("error", error);
  }
};
export const authAction = { login };
