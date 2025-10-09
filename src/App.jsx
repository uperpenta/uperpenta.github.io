import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function App() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Header></Header>
        <div className="h-20"></div>
        <Hero></Hero>
        <div className="h-20"></div>
        <About></About>
      </div>
    </>
  );
}
