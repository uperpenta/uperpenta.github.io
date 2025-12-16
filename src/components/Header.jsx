import cvPDF from "/src/assets/photos/CV_NOIEMBRIE_25.pdf";

export default function Header({
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  const highlightClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:origin-left after:scale-x-0 after:bg-darkred after:transition-transform " +
    "after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

  return (
    <header className="fixed w-full z-40 top-0 bg-white">
      <nav className="py-6 max-w-7xl mx-auto flex justify-between items-center">
        {/* Name / CV */}
        <div
          onClick={() => window.open(cvPDF, "_blank")}
          className={`flex flex-col text-left leading-tight cursor-pointer ${highlightClass}`}
        >
          <h3 className="text-black font-black font-comfortaa">
            Rares-Andrei Ialomiteanu
          </h3>
          <h3 className="font-comfortaa text-gray-400">Bucharest, Romania</h3>
        </div>

        {/* Navigation */}
        <div className="flex flex-row space-x-20">
          <button
            onClick={onAboutClick}
            className={`text-black font-black font-comfortaa cursor-pointer ${highlightClass}`}
          >
            About
          </button>

          <button
            onClick={onProjectsClick}
            className={`text-black font-black font-comfortaa cursor-pointer ${highlightClass}`}
          >
            Projects
          </button>

          <button
            onClick={onContactClick}
            className={`text-black font-black font-comfortaa cursor-pointer ${highlightClass}`}
          >
            Get in touch
          </button>
        </div>
      </nav>
    </header>
  );
}
