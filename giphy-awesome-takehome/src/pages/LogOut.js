import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../redux/actions/auth.action";

const LogOut = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleClick = (e) => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user.isAuthenticated) {
      localStorage.setItem(
        "users",
        JSON.stringify({
          user: { email: "", passWord: "" },
          isAuthenticated: false,
          loading: false,
          error: null,
        })
      );
      dispatch(authAction.logOut(user));
    }
  };
  return (
    <button type="submit" onClick={handleClick} className="logout-button">
      Log out
    </button>
  );
};

export default LogOut;
