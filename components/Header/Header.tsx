import Links from "./Links";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="flex items-center px-8 py-6 sm:px-12 border-b border-gray-400 justify-between">
        <div className="">
          <h1 className="text-red-600 cursor-pointer">Gaming Duniya</h1>
        </div>
        <div className="flex">
          <Links />
          <div className="md:hidden flex">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
