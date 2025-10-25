import transitions from "../transitions";
import "../index.css";

const About = () => {
  return (
    <div className="aboutMain">
      <div className="about">
        <div className="aboutHead">
          <h1>ABOUT ME</h1>
        </div>
        <div className="aboutContent">
          <div className="aboutSkills"></div>
          <div className="aboutWork"></div>
        </div>
      </div>
      <div className="scroller">
        <marquee behavior="scroll" direction="left">
          Copyright &copy; 2025 | Designed & Built by Muhammad Ali. All Rights
          Reserved.
        </marquee>
      </div>
    </div>
  );
};

export default transitions(About);
