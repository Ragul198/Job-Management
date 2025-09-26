import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsOpen(false); // close menu on mobile
    navigate(path, { state: { background: location } });
  };

  return (
    <nav className="p-4">
      {/* Main navbar container */}
      <div
        className="flex justify-between items-center
        p-4 rounded-full shadow-lg bg-white
        m-auto lg:w-[56rem] lg:h-[5.625rem] md:w-[38rem] md:h-[3.814rem]"
      >
        {/* Logo */}
        <div className="img cursor-pointer" onClick={() => handleNavClick("/")}>
          <img
            src="https://www.cybermindworks.com/images/cmwlogo.svg"
            className="lg:w-[2.75rem] lg:h-[2.7925rem] md:w-[2.25rem] md:h-[2.5rem] w-10 h-10"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-around items-center gap-6">
          <li
            className="px-4 py-2 hover:shadow-xl font-medium transition ease-in-out duration-300 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            Home
          </li>
          <li
            className="px-4 py-2 hover:shadow-xl font-medium transition ease-in-out duration-300 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/jobs")}
          >
            Find Jobs
          </li>
          <li
            className="px-4 py-2 hover:shadow-xl font-medium transition ease-in-out duration-300 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/talents")}
          >
            Find Talents
          </li>
          <li
            className="px-4 py-2 hover:shadow-xl font-medium transition ease-in-out duration-300 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/testimonials")}
          >
            Testimonials
          </li>
          <li>
            <div className="p-1 hover:shadow-xl hover:bg-[#bfb9b93f] transition ease-in-out duration-300 rounded-xl">
              <button
                onClick={() => handleNavClick("/create")}
                className="px-4 py-2 bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white rounded-full"
              >
                Create Jobs
              </button>
            </div>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-white shadow-lg rounded-xl p-4">
          <li
            className="px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            Home
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/jobs")}
          >
            Find Jobs
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/talents")}
          >
            Find Talents
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            onClick={() => handleNavClick("/testimonials")}
          >
            Testimonials
          </li>
          <li>
            <button
              onClick={() => handleNavClick("/create")}
              className="w-full px-4 py-2 bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white rounded-full"
            >
              Create Jobs
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
