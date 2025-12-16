import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-white">
        <Header
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />

        <div className="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth">
          <section className="snap-start h-screen">
            <div className="py-40">
              <Hero />
            </div>
          </section>

          <section ref={aboutRef} className="snap-start h-screen">
            <div className="py-30">
              <About />
            </div>
          </section>

          <section ref={projectsRef} className="snap-start">
            <div className="pt-15">
              <Projects />
            </div>
          </section>

          <section ref={contactRef} className="snap-start h-screen mt-32">
            <div className="pt-15">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
