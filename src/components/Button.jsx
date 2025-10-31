import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button id="hov">
      <Link
        to={props.link}
        className="purple-gradient flex justify-between gap-1.5 content-center text-3xl w-fit py-1.5 px-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-black"
      >
        {props.tag}
      </Link>
    </button>
  );
};

export default Button;
