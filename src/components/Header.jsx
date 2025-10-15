export default function Header() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky w-full z-40 top-0 bg-white">
      <nav className="py-6 max-w-7xl mx-auto flex justify-between">
        <div onClick={() => scrollToSection(topRef)} className="flex flex-col text-left leading-tight cursor-pointer">
          <h3  className="text-black font-black font-comfortaa">
            Rares-Andrei Ialomiteanu
          </h3>
          <h3 className="font-comfortaa text-gray-400">Bucharest, Romania</h3>
        </div>
        <div className="flex flex-row justify-between space-x-20">
          <button onClick={() => scrollTo("about")} className="text-black font-black font-comfortaa cursor-pointer">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="text-black font-black font-comfortaa cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="text-black font-black font-comfortaa cursor-pointer">
            Get in touch
          </button>
        </div>
      </nav>
    </header>
  );
}
