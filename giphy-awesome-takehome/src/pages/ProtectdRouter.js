import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouter = (props) => {
  let localData = JSON.parse(localStorage.getItem("users"));
  console.log(localData);
  if (localData.isAuthenticated === true) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRouter;
