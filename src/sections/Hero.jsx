import HeroButtons from "../components/HeroButtons";
import asciianimation from "/src/assets/photos/ascii-animation.gif";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-6 gap-6 lg:gap-4">
      <div className="flex-col lg:mr-auto w-full lg:w-1/2 xl:w-147">
        <h3 className="text-darkred font-bold font-nunito text-lg md:text-xl">
          Full-Stack Engineer
        </h3>
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold pt-3 font-playfair leading-snug">
          Continuous improvement, continuous development — and all that jazz
        </h1>
        <p className="text-gray-400 text-base md:text-xl pt-3 font-nunito">
          Hi, I'm Rares, a full-stack engineer with a background in Cloud and
          DevOps, with a passion for building clean and maintainable solutions
        </p>
        <div className="pt-3 flex flex-row gap-3">
          <HeroButtons></HeroButtons>
        </div>
      </div>
      <img
        src={asciianimation}
        alt="ascii animation"
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto lg:mx-0 rounded-xl h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-contain"
      />
    </section>
  );
}
