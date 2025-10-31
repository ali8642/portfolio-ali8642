import transitions from "../transitions";
import "../index.css";
import TypewriterText from "../components/TypewriterText";
import Header from "../components/Header";
import FeatureShowcase from "../components/FeatureShowcase";
import Marquee from "../components/Marquee";

const About = () => {
  return (
    // Main div for all the stuff
    <div className="flex flex-col-reverse lg:flex-col flex-wrap w-full h-full justify-between">
      {/* Main div for about stuff */}
      <div className="w-full relative text-white z-5 bg-transparent flex flex-col justify-between items-center gap-4">
        {/* Header component */}
        <Header />

        {/* Hero section for about page */}
        <section className="flex flex-col lg:flex-row justify-around items-center">
          {/* Main Heading */}
          <div className="text-start lg:w-2/4 p-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-6 text-shadow-black">
              Hi! I'm Muhammad Ali
            </h1>
            <TypewriterText />

            {/* Long description for the hero section */}
            <h2 className="text-3xl leading-6 text-gray-300 text-shadow-black">
              I'm a passionate Junior Front-End Developer with a love for
              creating beautiful and functional web experiences. I enjoy turning
              ideas into reality through clean, efficient code and thoughtful
              design.
            </h2>
          </div>

          {/* Featuring pfp and some languages */}
          <FeatureShowcase />
        </section>

        {/* skills section for displaying skills in tech */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-shadow-black">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-black">
              <h3 className="font-semibold text-white">Frontend</h3>
              <p className="text-sm text-gray-300">
                React, JavaScript, HTML, CSS
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-black">
              <h3 className="font-semibold text-white">Styling</h3>
              <p className="text-sm text-gray-300">Tailwind CSS, SCSS</p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-black">
              <h3 className="font-semibold text-white">Tools</h3>
              <p className="text-sm text-gray-300">Git, Vite, VS Code</p>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-shadow-black">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-black">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Web Development
              </h3>
              <p className="text-gray-300">
                Building responsive and interactive web applications using
                modern technologies and best practices.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-black">
              <h3 className="text-xl font-semibold mb-2 text-white">
                UI/UX Focus
              </h3>
              <p className="text-gray-300">
                Creating user-friendly interfaces with attention to detail and
                smooth user experiences.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Marquee />
    </div>
  );
};

export default transitions(About);
