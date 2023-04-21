import React from "react";
import "./styles.scss";
import { HeroBanner } from "./heroBanner";
import { Trending } from "./trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
