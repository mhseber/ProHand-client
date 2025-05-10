import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const ServiceToDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Helmet>
        <title>ServiceToDo || TechAid</title>
      </Helmet>
      <div className="relative flex items-center justify-center w-full overflow-hidden shadow-2xl h-72 bg-gradient-to-r from-orange-800 via-gray-900 to-black rounded-xl">
        {/* Rotating Decorative Elements */}
        <div className="absolute rounded-full w-96 h-96 bg-gradient-to-br from-orange-200 via-orange-500 to-gray-800 opacity-20 animate-spin-slow"></div>
        <div className="absolute rounded-full w-72 h-72 bg-gradient-to-br from-orange-200 via-orange-500 to-gray-800 opacity-20 "></div>

        <h1 className="relative text-4xl font-extrabold leading-tight tracking-wider text-center text-white md:text-6xl">
          <span className="block text-gray-300">Your Services</span>
          <span className="block mt-2 text-orange-600">
            Booked by Customers
          </span>
        </h1>

        <p className="relative mt-4 text-lg font-medium text-center text-gray-200 md:text-xl">
          Track, manage, and grow your bookings effortlessly.
        </p>
      </div>

      <h1
        data-aos="fade-up"
        className="py-12 mt-8 mb-10 text-4xl font-extrabold text-center text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
      >
        Manage Your Provided Services Below
      </h1>
    </div>
  );
};

export default ServiceToDo;
