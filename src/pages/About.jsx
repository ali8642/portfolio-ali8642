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
          <div className="aboutDesc">
            <h3>Hi! I'm Muhammad Ali, a Junior Front-end Web Developer</h3>
            <br />
            <p>
              and a final-year Economics student. I build cool stuff for the
              internet, mostly using React.js, JavaScript, HTML, and CSS. I'm
              learning to make modern, responsive websites that look great on
              phones and computers, like my e-commerce and blog projects. I love
              to solve problems and I'm excited to grow my full-stack skills.
            </p>
            <br />
            <span>
              <h2>Skills in Technologies</h2>
            </span>
            <br />
            <img src="./public/icons/html.png" width="70px" />
            <img src="./public/icons/css.png" width="98px" />
            <img src="./public/icons/javascript.png" width="82px" />
            <img src="./public/icons/react.png" width="86px" />
            <img src="./public/icons/git.png" width="82px" />
            <img src="./public/icons/github.png" width="88px" />
            <img src="./public/icons/npm.png" width="98px" />
            <img src="./public/icons/tailwindcss.png" width="82px" />
            <img src="./public/icons/word.png" width="76px" />
            <img src="./public/icons/excel.png" width="82px" />
            <img src="./public/icons/powerpoint.png" width="82px" />
          </div>
          <div className="aboutSkills"></div>
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
