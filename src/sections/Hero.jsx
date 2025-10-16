import About from "./About";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";
import HeroButtons from "../components/HeroButtons";
import asciianimation from "/src/assets/photos/ascii-animation.gif";

export default function Hero() {
  return (
    <section className="py-6 max-w-7xl mx-auto flex flex-row justify-between pt-20">
      <div className="flex-col mr-auto w-147">
        <h3 className="text-darkred font-bold font-nunito text-xl">
          Full-Stack Engineer
        </h3>
        <h1 className=" text-black text-5xl font-bold pt-3 font-playfair leading-snug">
          Continuous improvement, continuous development — and all that jazz
        </h1>
        <p className=" text-gray-400 text-xl pt-3 font-nunito">
          Hi, I’m Rares, a full-stack engineer with a background in Cloud and
          DevOps, with a passion for building clean and maintainable solutions
        </p>
        <div className="pt-3 flex flex-row gap-3">
          <HeroButtons></HeroButtons>
        </div>
      </div>
      <img src={asciianimation} alt="ascii animation" className="w-1/2 rounded-xl h-auto max-h-[400px] " />
    </section>
  );
}
