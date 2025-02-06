import { easeOut, motion } from "framer-motion"
import banner from "../assets/banner.jpg"
import one from "../../src/assets/1.jpg"
import two from "../../src/assets/2.jpg"
import three from "../../src/assets/3.jpg"
import four from "../../src/assets/4.jpg"

const Hero = () => {
    return (
        <div
            className="hero min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className=" mr-40 max-w-md">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="mb-5 text-6xl font-extrabold">We <motion.span
                            animate={{ color: ['#ff6833', '#33d7ff'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Fix</motion.span>, As
                        Soon As
                        <motion.span
                            animate={{ color: ['#ff6833', '#33d7ff'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Possible</motion.span></motion.h1>
                    <p className="mb-5">
                        There are many variations of passages of Electronics Services, but the electronics have suffered alteration electronics repair, by injected humour yrawtap lewoj itaque quam praesentium.
                    </p>

                </div>
                <div className="grid grid-cols-2">
                    <motion.img
                        src={one}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-t-4  border-orange-600 shadow-2xl"
                        alt="img" />
                    <motion.img
                        src={two}
                        animate={{ x: [80, 100, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-t-4 border-r-4  border-orange-600 shadow-2xl"
                        alt="img" />
                    <motion.img
                        src={three}
                        animate={{ x: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-r-4 border-b-4  border-orange-600 shadow-2xl"
                        alt="img" />
                    <motion.img
                        src={four}
                        animate={{ y: [80, 100, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4  border-orange-600 shadow-2xl"
                        alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Hero;