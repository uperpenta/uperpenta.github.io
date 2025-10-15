import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";


export default function App() {
  return (
    <>
      <div className="bg-white min-h-screen px-5 items-center">
        <Header></Header>
        <div className="h-20"></div>
        <Hero></Hero>
        <div className="h-20"></div>
        <section id="about">
          <About></About>
        </section>
      </div>
    </>
  );
}
