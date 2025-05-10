import extra1 from "../assets/extra1.jpg";
import { FaLaptop } from "react-icons/fa6";
import { IoDesktopSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ExtraSectionsOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100 hero dark:bg-gray-800 dark:text-white">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          src={extra1}
          className="w-[400px] rounded-lg shadow-2xl shadow-black dark:shadow-white mt-6 mr-6"
        />
        <div className="pr-40">
          <h1 data-aos="slide-left" className="pb-4 text-orange-700">
            ABOUT SOMETHING
          </h1>
          <h1 data-aos="slide-left" className="pb-4 text-5xl font-bold">
            It’s Our <span className="text-orange-700">Honour</span>, To <br />
            Be With <span className="text-orange-700">You</span>
          </h1>
          <p
            data-aos="slide-left"
            className="py-6 text-black dark:text-gray-400"
          >
            There are many variations of passages of electronics Services, but
            the majority have <br /> suffered alteration in some form, by
            injected humour, or randomised words which dont <br /> look even
            slightly believable. by injected humour, or randomised words which
            don't look even
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-2"
          >
            <div>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                <FaLaptop className="inline mr-2" />
                Laptop Repair
              </h1>
              <p className="pt-5 text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair,{" "}
                <br />
                but the majority have suffered alteration
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                <FaCamera className="inline mr-2" />
                Camera Repair
              </h1>
              <p className="pt-5 text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair,{" "}
                <br /> but the majority have suffered alteration
              </p>
            </div>
            <div>
              <h1 className="pt-5 text-2xl font-semibold text-black dark:text-white">
                <IoDesktopSharp className="inline mr-2" /> Desktop Repair
              </h1>
              <p className="pt-5 text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair,{" "}
                <br /> but the majority have suffered alteration
              </p>
            </div>
            <div>
              <h1 className="pt-5 text-2xl font-semibold text-black dark:text-white">
                {" "}
                <MdOutlinePhoneIphone className="inline mr-2" /> Phone Repair
              </h1>

              <p className="pt-5 text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair,{" "}
                <br /> but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionsOne;
