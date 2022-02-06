import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <button
        className="transition active:rotate-12 duration-200"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <svg
          className="z-30"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="25"
          height="25"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      <div
        className={`top-0 right-0 w-52 bg-blue-600 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {showSidebar ? (
          <button
            className="absolute active:rotate-12 transition duration-200 flex pl-2 pt-2 items-center"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
        <div className="flex justify-center">
          <h3 className="mt-20  font-semibold text-white">I am a sidebar</h3>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
