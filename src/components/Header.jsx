import cvPDF from "/src/assets/photos/CV_NOIEMBRIE_25.pdf";
import { useState } from "react";

export default function Header({
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const highlightClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:origin-left after:scale-x-0 after:bg-darkred after:transition-transform " +
    "after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

  const handleNavClick = (callback) => {
    setIsMenuOpen(false);
    callback();
  };

  return (
    <header className="fixed w-full z-40 top-0 bg-white">
      <nav className="py-4 md:py-6 max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6">
        {/* Name / CV */}
        <div
          onClick={() => window.open(cvPDF, "_blank")}
          className={`flex flex-col text-left leading-tight cursor-pointer ${highlightClass}`}
        >
          <h3 className="text-black font-black font-comfortaa text-sm sm:text-base">
            Rares-Andrei Ialomiteanu
          </h3>
          <h3 className="font-comfortaa text-gray-400 text-xs sm:text-sm">
            Bucharest, Romania
          </h3>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black mt-1.5 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row space-x-8 lg:space-x-20">
          <button
            onClick={onAboutClick}
            className={`text-black font-black font-comfortaa cursor-pointer text-sm lg:text-base ${highlightClass}`}
          >
            About
          </button>

          <button
            onClick={onProjectsClick}
            className={`text-black font-black font-comfortaa cursor-pointer text-sm lg:text-base ${highlightClass}`}
          >
            Projects
          </button>

          <button
            onClick={onContactClick}
            className={`text-black font-black font-comfortaa cursor-pointer text-sm lg:text-base ${highlightClass}`}
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavClick(onAboutClick)}
              className="text-black font-black font-comfortaa cursor-pointer text-left py-2 hover:text-darkred transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick(onProjectsClick)}
              className="text-black font-black font-comfortaa cursor-pointer text-left py-2 hover:text-darkred transition-colors"
            >
              Projects
            </button>

            <button
              onClick={() => handleNavClick(onContactClick)}
              className="text-black font-black font-comfortaa cursor-pointer text-left py-2 hover:text-darkred transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
