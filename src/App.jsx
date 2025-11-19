import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <div className="w-full bg-white">
        <Header />

        <div className="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth">
          <section id="hero" className="snap-start h-screen">
            <div className="py-40">
              <Hero />
            </div>
          </section>

          <section id="about" className="snap-start h-screen">
            <div className="py-30">
              <About />
            </div>
          </section>

          <section id="projects" className="snap-start h-screen">
            <div className="pt-15">
              <Projects />
            </div>
          </section>

          <section id="contact" className="snap-start h-screen">
            <div className="pt-15">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
