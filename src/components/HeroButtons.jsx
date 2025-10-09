import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-row gap-4 mt-4">
      <a
        href="https://github.com/uperpenta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ backgroundColor: "#c44141", color: "#ffffff" }}
          whileHover={{
            backgroundColor: "#000000",
            color: "#c44141",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="relative w-28 h-8 rounded-full font-nunito font-extrabold overflow-hidden cursor-pointer"
        >
          <motion.span
            className="absolute inset-0 bg-black"
            initial={{ y: "100%", opacity: 0 }}
            whileHover={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <span className="relative z-10">GitHub</span>
        </motion.button>{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/rares-andrei-ialomiteanu-269988251/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ backgroundColor: "#ffffff", color: "#000000" }}
          whileHover={{
            backgroundColor: "#000000",
            color: "#ffffff",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="relative w-28 h-8 rounded-full  border-2 font-nunito font-extrabold overflow-hidden cursor-pointer"
        >
          <motion.span
            className="absolute inset-0 bg-black"
            initial={{ y: "100%", opacity: 0 }}
            whileHover={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <span className="relative z-10">LinkedIn</span>
        </motion.button>
      </a>
    </div>
  );
}
