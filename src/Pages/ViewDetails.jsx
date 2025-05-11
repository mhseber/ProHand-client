import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import service from "../assets/banner.jpg";
import me from "../assets/Me.png";
import { FaLocationDot } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Details || TechAid</title>
      </Helmet>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-orange-700">
          Services Details
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Electronic Item Repairing Services Details
        </p>
      </header>
      <div className="items-center justify-center ">
        <div
          className="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 "
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-duration="800"
        >
          <div className="flex gap-3">
            <img data-aos="fade-up" className="w-10" src={me} alt="" />
            <div className="font-semibold text-black dark:text-gray-300">
              <p data-aos="slide-left" className="pt-4">
                MH SEBER
              </p>
            </div>
          </div>
          <div className="p-4 text-center text-white bg-gray-500">
            <img data-aos="fade-up" src={service} alt="" />
          </div>
          <div className="p-6 ">
            <div className="mb-4 text-gray-600 dark:text-gray-300 ">
              <h1 data-aos="slide-right" className="text-3xl font-bold">
                Electronic Item Repairing Services
              </h1>
              <p data-aos="slide-left" className="pt-3">
                Electronic item repairing services play a crucial role in
                extending the lifespan of gadgets and appliances, reducing
                waste, and saving costs for consumers. These services cover a
                wide range of items, including smartphones, laptops,
                televisions, and home appliances like refrigerators and washing
                machines. Skilled technicians diagnose and fix issues such as
                hardware malfunctions, software glitches, and connectivity
                problems. By opting for repairs instead of replacements,
                customers contribute to environmental sustainability by
                minimizing electronic waste. Reliable repair services also
                ensure that devices function optimally, improving user
                experience and efficiency. Additionally, many providers offer
                warranties, ensuring quality and peace of mind.
              </p>
            </div>
            <h1
              data-aos="slide-right"
              className="mb-4 text-2xl text-orange-600"
            >
              Service Provider Info :
            </h1>
            <div className="flex gap-3">
              <img data-aos="fade-up" className="w-10" src={me} alt="" />
              <div className="font-semibold text-black dark:text-gray-300">
                <p data-aos="slide-left">MH SEBER</p>
                <div className="flex pt-2">
                  <FaLocationDot />
                  <p data-aos="slide-left"> Old Dhaka</p>
                </div>
              </div>
            </div>
            <ul className="space-y-2 text-left text-gray-700 dark:text-gray-300">
              <div>
                <p
                  data-aos="slide-left"
                  className="pt-4 font-semibold text-black dark:text-gray-300"
                >
                  Price: $200
                </p>
              </div>
            </ul>
          </div>
          <div className="p-4 text-center bg-gray-50 dark:bg-gray-700">
            <Link to="/bookNow">
              <button
                data-aos="fade-up"
                className="w-40 px-4 py-2 font-semibold text-white transition btn bg-gradient-to-r from-gray-500 to-gray-800 rounded-xl hover:bg-gray-300"
              >
                <LuNotebookText />
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
