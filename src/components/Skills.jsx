import "../index.css";

const Skills = () => {
  return (
    <div className="slider" style="--width: 100px; --height: 100px;--quantity: 10;">
      <div className="list">
        <div className="item item1">
          <img src="./public/icons/html.png" />
        </div>
        <div className="item item2">
          <img src="./public/icons/css.png" />
        </div>
        <div className="item item3">
          <img src="./public/icons/javascript.png" />
        </div>
        <div className="item item4">
          <img src="./public/icons/react.png" />
        </div>
        <div className="item item5">
          <img src="./public/icons/git.png" />
        </div>
        <div className="item item6">
          <img src="./public/icons/github.png" />
        </div>
        <div className="item item7">
          <img src="./public/icons/npm.png" />
        </div>
        <div className="item item8">
          <img src="./public/icons/tailwindcss.png" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
