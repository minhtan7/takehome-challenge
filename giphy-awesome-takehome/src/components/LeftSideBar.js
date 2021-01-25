import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrendingKey from "./TrendingKey";

const LeftSideBar = () => {
  return (
    <div className="col-3">
      <img
        width="100%"
        src="https://media.giphy.com/channel_assets/reactions/k2ybPvSfRQuK/200h.gif"
        alt="left side bar"
      />
      <p style={{ textAlign: "center" }}>Don't tell it to me, GIF it to me!</p>

      <p>Contact:</p>
      <div className="side-bar-icon">
        <FontAwesomeIcon icon="user" />
        <FontAwesomeIcon icon="envelope" />
        <FontAwesomeIcon icon="search" />
      </div>
      <hr style={{ backgroundColor: "white", height: "3px" }} />
      <div>
        <p>Trending Now</p>
        <TrendingKey />
      </div>
    </div>
  );
};

export default LeftSideBar;
