import React from "react";
import "../index.css"
import BaseLayout from "../components/BaseLayout";

function Home() {
  return (
    <>
    <BaseLayout />
      <div className="home">
        <div className="homeAbout"></div>
        <div className="homeImg">
          <img src="./images/pfp.png" alt="home pfp" width="100%" />
        </div>
      </div>
    </>
  );
}

export default Home;
