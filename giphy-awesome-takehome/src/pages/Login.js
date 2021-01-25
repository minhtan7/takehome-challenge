import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/actions/auth.action";
import { Redirect, Route } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let email = "";
  let passWord = "";
  const handleEmail = (e) => {
    email = e.target.value;
  };
  const handlePassWord = (e) => {
    passWord = e.target.value;
  };
  const isAthenticaed = useSelector((state) => state.auth.isAthenticaed);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email, passWord);
    dispatch(authAction.login({ email: email, passWord: passWord }));
    /* return <Redirect to="/" />; */
  };

  return (
    <Form onSubmit={(e) => e.preventDefault} className="form-login">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlePassWord}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
};

export default Login;
