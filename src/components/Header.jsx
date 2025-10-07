export default function Header() {
  return (
    <header className="fixed w-full z-40 top-0 bg-transparent">
      <nav className="py-6 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto flex justify-between">
        <div className="flex flex-col text-left leading-tight">
          <h3 className="text-black font-bold">Rares-Andrei Ialomiteanu</h3>
          <h3>Bucharest, Romania</h3>
        </div>
        <div className="flex flex-row justify-between space-x-20">
          <h3 className="text-black font-bold">About</h3>
          <h3 className="text-black font-bold">Projects</h3>
          <h3 className="text-black font-bold">Get in touch</h3>
        </div>
      </nav>
    </header>
  );
}
