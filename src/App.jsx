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

        <div className="h-screen overflow-y-auto md:snap-y md:snap-proximity scroll-smooth">
          <section className="md:snap-start">
            <div className="pt-20 md:pt-40 pb-4 md:pb-20">
              <Hero />
            </div>
          </section>

          <section ref={aboutRef} className="md:snap-star">
            <div className="py-4 md:py-20">
              <About />
            </div>
          </section>

          <section ref={projectsRef} className="md:snap-start">
            <div className="py-4 md:py-15">
              <Projects />
            </div>
          </section>

          <section ref={contactRef} className="md:snap-start  mt-4 md:mt-20">
            <div className="py-4 md:py-15">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
