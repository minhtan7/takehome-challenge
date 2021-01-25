import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/giphy_logo.png";
import LogOut from "../pages/LogOut";
import { useDispatch } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";

const PublicNavbar = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(gifAction.sortLatest());
  };
  return (
    <Navbar expand="lg" className="nav-link-all fixed-top">
      <Nav>
        <Link to="/">
          <img src={logo} alt="CoderSchool" width="100px" />
        </Link>
        <div className="nav-bar">
          <div className="nav-link-wrap">
            <Link
              to="/reactions"
              className="nav-link"
              style={{ color: "white" }}
            >
              Reactions
            </Link>
          </div>
          <div className="nav-link-wrap">
            <Link to="/sports" className="nav-link" style={{ color: "white" }}>
              Sports
            </Link>
          </div>
          <div className="nav-link-wrap">
            <Link
              to="/stickers"
              className="nav-link"
              style={{ color: "white" }}
            >
              Stickers
            </Link>
          </div>
          <div className="nav-link-wrap">
            <Link to="/weird" className="nav-link" style={{ color: "white" }}>
              Weird
            </Link>
          </div>
          <div className="nav-link-wrap">
            <Link
              to="/celebrities"
              className="nav-link"
              style={{ color: "white" }}
            >
              Celebrities
            </Link>
          </div>
          <button className="button-latest" onClick={handleOnClick}>
            Lastest
          </button>
        </div>
      </Nav>

      <LogOut />
    </Navbar>
  );
};

export default PublicNavbar;
