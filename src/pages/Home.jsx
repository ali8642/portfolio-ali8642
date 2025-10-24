import React from "react";
import "../index.css"
import { Link } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";

function Home() {
  return (
    <div className="homeMain">
    <BaseLayout />
      <div className="home">
        <div className="homeAbout">
          <h1>HI THERE! <br />I'M <span>MUHAMMAD ALI</span></h1>
          <h3>Front-End Developer</h3>
          <p>I'm a Modern Web App Developer who turns coffee into code! I build super-fast, sleek interfaces using React, JavaScript, and Tailwind CSS. Think clean UIs, smooth interactions, and solutions that actually work. I make the web look good and feel great.</p>
          <button id="hov"><Link to="/projects"></Link>Explore My Work</button>
        </div>
        <div className="homeImg">
          <img src="./images/pfp.png" alt="home pfp" width="100%" />
        </div>
      </div>
      <div className="scroller">
        <marquee behavior="scroll" direction="left">Copyright &copy; 2025 | Designed & Built by Muhammad Ali. All Rights Reserved.</marquee>
      </div>
    </div>
  );
}

export default Home;
