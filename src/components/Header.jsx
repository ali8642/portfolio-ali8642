import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

const Header = () => {
  return (
    <>
      {/* Main header linked to about setion for displaying my ID */}
      <div className="w-[100%] my-9 lg:my-4">
        <Link
          to="/about"
          className="flex gap-2 items-center p-2 absolute left-4"
        >
          <img
            src="./public/images/pfp.png"
            alt="pfp"
            className="w-8 h-8 object-cover rounded-full bg-amber-200"
          />
          <h2 className="text-2xl">ali8642</h2>
        </Link>
        <Link
          to="public\documents\Resume - Junior Web Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-2xl absolute right-4 py-1.5 px-3 bg-white border-gray-400 rounded-full flex gap-2 items-center transition-transform duration-300 hover:scale-105 shadow-black cursor-pointer"
          type="download"
        >
          Resume <MdDownload />
        </Link>
      </div>
    </>
  );
};

export default Header;
