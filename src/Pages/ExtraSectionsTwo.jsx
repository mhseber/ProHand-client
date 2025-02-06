import one from "../../src/assets/1.jpg"
import two from "../../src/assets/2.jpg"
import three from "../../src/assets/3.jpg"
import four from "../../src/assets/4.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ExtraSectionsTwo = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);
    return (
        <div className=" bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pt-10 pb-10 ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 data-aos="slide-right" className="text-xl text-orange-600 font-bold"> Work Gallery</h1>
                    <h1 data-aos="slide-right" className="text-5xl text-orange-700 font-extrabold">EleCron Work</h1>
                    <p data-aos="slide-right" className="py-6 text-black">
                        There are many variations of passages of electronics repair, but the majority have suffered alteration in azer duskam
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="grid grid-cols-4 w-[400px] ">
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionsTwo;