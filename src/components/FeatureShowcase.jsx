export default function FeatureShowcase() {
  return (
    <div className="h-2/4 flex items-center justify-center">
      {/* MAIN PICTURE WITH FLOATING BOXES */}
      <div className="relative w-full max-w-3xl h-[500px] object-cover">
        {/* Main pfp image of myself */}
        <img
          src="./public/images/pfp.png"
          alt="Main"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* BOX 1 */}
        <div className="absolute bottom-12 right-0 rounded-full p-4 shadow-lg w-44 animate-float backdrop-blur-6">
          <img src="./public/icons/react.png" className="bg-none" />
        </div>

        {/* BOX 2  */}
        <div className="absolute top-8 right-6 rounded-lg shadow-lg w-28 animate-float backdrop-blur-6 animate-float-delayed z-[-1]">
          <img src="./public/icons/javascript.png" className="bg-none" />
        </div>

        {/* BOX 3  */}
        <div className="absolute bottom-50 left-2 rounded-full shadow-lg w-28 animate-float backdrop-blur-6 animate-float-delayed-2 z-[-1]">
          <img src="./public/icons/tailwindcss.png" className="bg-none" />
        </div>
      </div>
    </div>
  );
}
