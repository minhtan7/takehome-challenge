import React from "react";
import GifList from "../components/GifList";

const Home = ({ endpoint }) => {
  return <GifList endpoint={endpoint} />;
};

export default Home;
