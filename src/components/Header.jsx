export default function Header() {
  return (
    <header className="fixed w-full z-40 top-0 bg-white">
      <nav className="py-6 max-w-7xl mx-auto flex justify-between">
        <div className="flex flex-col text-left leading-tight">
          <h3 className="text-black font-extrabold font-comfortaa">
            Rares-Andrei Ialomiteanu
          </h3>
          <h3 className="font-comfortaa text-gray-400">Bucharest, Romania</h3>
        </div>
        <div className="flex flex-row justify-between space-x-20">
          <button className="text-black font-extrabold font-comfortaa">
            About
          </button>
          <button className="text-black font-extrabold font-comfortaa">
            Projects
          </button>
          <button className="text-black font-extrabold font-comfortaa">
            Get in touch
          </button>
        </div>
      </nav>
    </header>
  );
}
