import { easeOut, motion } from "framer-motion";
import banner from "../assets/banner.jpg";
import one from "../../src/assets/1.jpg";
import two from "../../src/assets/2.jpg";
import three from "../../src/assets/3.jpg";
import four from "../../src/assets/4.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen text-black bg-white hero dark:bg-gray-900 dark:text-white"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex flex-col items-center justify-center gap-10 px-6 hero-content text-neutral-content lg:flex-row lg:px-20">
        {/* Text section */}
        <div className="max-w-md text-center lg:mr-40 lg:text-left">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="mb-5 text-5xl font-extrabold md:text-6xl"
          >
            We{" "}
            <motion.span
              animate={{ color: ["#ff6833", "#33d7ff"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Fix
            </motion.span>
            , As Soon As{" "}
            <motion.span
              animate={{ color: ["#ff6833", "#33d7ff"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Possible
            </motion.span>
          </motion.h1>
          <p className="mb-5 text-sm md:text-base">
            There are many variations of passages of Electronics Services, but
            the electronics have suffered alteration electronics repair, by
            injected humour yrawtap lewoj itaque quam praesentium.
          </p>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.img
            src={one}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-t-4 border-orange-600 shadow-2xl mx-auto"
            alt="img"
          />
          <motion.img
            src={two}
            animate={{ x: [80, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-t-4 border-r-4 border-orange-600 shadow-2xl mx-auto"
            alt="img"
          />
          <motion.img
            src={three}
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-r-4 border-b-4 border-orange-600 shadow-2xl mx-auto"
            alt="img"
          />
          <motion.img
            src={four}
            animate={{ y: [80, 100, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-orange-600 shadow-2xl mx-auto"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
