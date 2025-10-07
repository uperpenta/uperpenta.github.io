export default function Hero() {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto flex flex-row justify-between pt-30">
      {/*Brief Introduction Sectin  */}
      <div className="flex-col">
        <h3 className="text-red-800 font-bold ">Full-Stack Engineer</h3>
        <h1 className="text-black text-5xl font-bold pt-3">
          Continuous improvement, continuous development — and all that jazz
        </h1>
        <p className="text-gray-400 text-xl pt-3">
          Hi, I’m Rares, a full-stack engineer with a background in Cloud and
          DevOps, with a passion for building clean and maintainable
          solutions...
        </p>
        <div className="pt-3">
          <button>GitHub</button>
          <button>LinkedIn</button>
        </div>
      </div>
      {/* IFrame for preview of "About" Section */}
      <div>lold</div>
    </section>
  );
}
