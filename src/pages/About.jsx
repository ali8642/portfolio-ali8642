import transitions from "../transitions";
import "../index.css";
import TypewriterText from "../components/TypewriterText";
import Header from "../components/Header";
import FeatureShowcase from "../components/FeatureShowcase";
import Button from "../components/Button";

const About = () => {
  return (
    // Main div for all the stuff
    <div className=" flex-wrap w-full h-screen justify-between">
      {/* Main div for about stuff */}
      <div className="w-full relative text-white z-5 bg-transparent flex flex-col  justify-between items-center gap-10 pb-16 lg:pb-0">
        {/* Header component */}
        <Header />

        {/* Hero section for about page */}
        <section className="flex flex-col lg:flex-row justify-around items-center animate__animated animate__slideInDown">
          {/* Main Heading */}
          <div className="text-start lg:w-2/4 p-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-6 text-shadow-black">
              Hi! I'm Muhammad Ali
            </h1>
            <TypewriterText />

            {/* Long description for the hero section */}
            <h2 className="text-3xl mb-4 leading-6 text-gray-300 text-shadow-black">
              I'm a passionate Junior Front-End Developer with a love for
              creating beautiful and functional web experiences. I enjoy turning
              ideas into reality through clean, efficient code and thoughtful
              design.
            </h2>

            {/* button linked to contact page */}
            <Button link="/contact" tag="Connect with me" />
          </div>

          {/* Featuring pfp and some languages */}
          <FeatureShowcase />
        </section>

        {/* skills section for displaying skills in tech */}
        <section className="cursor-none my-4 lg:my-0 lg:w-[88%] w-full flex flex-col items-center">
          <h2 className="w-fit lg:w-full text-2xl text-white lg:text-5xl font-semibold lg:mb-4 mb-8 text-center shadow-black purple-gradient px-4 rounded-md mt-12">
            Skills
          </h2>
          <div className="flex flex-col lg:flex-row lg:gap-6 gap-8 items-stretch lg:justify-center">
            {/* skills frontend */}
            <div className="bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-black transition-transform duration-300 hover:scale-105">
              <h3 className="font-semibold text-black text-4xl">Frontend</h3>
              <p className="text-2xl text-black flex lg:flex-row flex-col items-center gap-8">
                React, JavaScript, HTML, CSS
                <span className="flex gap-2">
                  <img src="/icons/react.png" className="max-h-12" />
                  <img src="/icons/javascript.png" className="max-h-12" />
                  <img src="/icons/html.png" className="max-h-12" />
                  <img src="/icons/css.png" className="max-h-12" />
                </span>
              </p>
            </div>

            {/* styling skills */}
            <div className="bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-black transition-transform duration-300 hover:scale-105">
              <h3 className="font-semibold text-black text-4xl">Styling</h3>
              <p className="text-2xl text-black flex lg:flex-row flex-col items-center gap-8">
                Tailwind CSS, SCSS
                <span className="flex gap-2 items-center">
                  <img src="/icons/tailwindcss.png" className="max-h-8" />
                  <img src="/icons/scss.png" className="max-h-12" />
                </span>
              </p>
            </div>

            {/* skills for tools */}
            <div className="bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-black transition-transform duration-300 hover:scale-105 lg:w-fit min-w-80">
              <h3 className="font-semibold text-black text-4xl">Tools</h3>
              <p className="text-2xl text-black flex lg:flex-row flex-col items-center gap-8">
                Git, Vite, VS Code
                <span className="flex gap-2">
                  <img src="/icons/git.png" className="max-h-12" />
                  <img src="/icons/vite.png" className="max-h-12" />
                  <img src="/icons/vscode.png" className="max-h-12" />
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* What I do section */}
        <section className="cursor-none my-4 lg:my-0 lg:w-[88%] w-full flex flex-col items-center">
          <h2 className="w-fit lg:w-full text-2xl text-white lg:text-5xl font-semibold lg:mb-4 mb-8 text-center shadow-black purple-gradient px-4 rounded-md mt-12">
            What I Do
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <div className="bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-black transition-transform duration-300 hover:scale-105 lg:w-fit max-w-80">
              <h3 className="font-semibold text-black text-4xl">
                Web Development
              </h3>
              <p className="text-2xl text-black flex items-center gap-8 leading-4">
                Building responsive and interactive web applications using
                modern technologies and best practices.
              </p>
            </div>

            <div className="bg-gray-200 bg-opacity-50 p-4 rounded-lg shadow-black transition-transform duration-300 hover:scale-105 lg:w-fit max-w-80">
              <h3 className="font-semibold text-black text-4xl">UI/UX Focus</h3>
              <p className="text-2xl text-black flex items-center gap-8 leading-4">
                Creating user-friendly interfaces with attention to detail and
                smooth user experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default transitions(About);
