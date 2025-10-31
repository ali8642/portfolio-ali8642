import transitions from "../transitions";
import "../index.css";
import Marquee from "../components/Marquee";
import Button from "../components/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import "animate.css";
import CardStack from "../components/CardStack";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    // Main div for all the stuff
    <div className="h-screen p-0 flex flex-col-reverse lg:flex-col w-full gap-0 justify-end lg:justify-between overflow-hidden animate__animated animate__slideInUp">
      {/* Main div for home stuff */}
      <div className="w-full p-4 relative text-white z-5 bg-transparent flex flex-col justify-between items-center lg:gap-4 gap-8">
        {/* Header component */}
        <Header />

        {/* Hero content */}
        <h1 className="text-5xl pt-8 lg:text-[4rem] text-center text-shadow-black leading-10">
          Transforming Ideas into <br /> Engaging Front-End Experiences
        </h1>

        {/* Fan-out card design for projects */}
        <CardStack />

        {/* a short description */}
        <p className="text-2xl text-center leading-4 text-shadow-black">
          “Turning ideas into interactive web experiences. <br /> A Junior
          Front-End Developer crafting sleek and responsive designs with React
          and Tailwind.”
        </p>

        {/* buttons leading to the projects and about section */}
        <div className="flex justify-between items-center gap-9">
          {/* this button redirect to projects page */}
          <Button
            tag={["Explore My Work ", <MdOutlineArrowOutward key="icon" />]}
            link="/projects"
          />

          {/* this button redirect to about page */}
          <button>
            <Link
              to="/about"
              className="bg-white text-black border-gray-500 flex justify-between gap-1.5 content-center text-3xl w-fit p-1.5 lg:px-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-black cursor-pointer"
            >
              About Me
            </Link>
          </button>
        </div>
      </div>
      <Marquee />
    </div>
  );
}

export default transitions(Home);
