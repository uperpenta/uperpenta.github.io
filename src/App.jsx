import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <>
      <div className="bg-white min-h-screen px-5 items-center">
        <Header></Header>
        <div className="h-20"></div>
        <section id="hero">
          <Hero></Hero>
        </section>
        <div className="h-20"></div>
        <section id="about">
          <About></About>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
      </div>
    </>
  );
}
