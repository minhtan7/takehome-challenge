import React from "react";
import GifList from "../components/GifList";

const Home = ({ endpoint }) => {
  return (
    <div>
      <h1>This is Homepage</h1>
      <GifList endpoint={endpoint} />
    </div>
  );
};

export default Home;
