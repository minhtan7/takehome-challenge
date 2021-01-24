import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/giphy_logo.png";

const PublicNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="nav-link-all">
      <Nav>
        <Link to="/">
          <img src={logo} alt="CoderSchool" width="100px" />
        </Link>
        <Link to="/reactions" className="nav-link" style={{ color: "white" }}>
          Reactions
        </Link>
        <Link to="/sports" className="nav-link" style={{ color: "white" }}>
          Sports
        </Link>
        <Link to="/stickers" className="nav-link" style={{ color: "white" }}>
          Stickers
        </Link>
        <Link to="/weird" className="nav-link" style={{ color: "white" }}>
          Weird
        </Link>
        <Link to="/celebrities" className="nav-link" style={{ color: "white" }}>
          Celebrities
        </Link>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
