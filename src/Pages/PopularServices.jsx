import { useEffect, useState } from "react";
import PCard from "./PCard";
import Aos from "aos";
import "aos/dist/aos.css";

const PopularServices = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    fetch("https://pro-hand-server.vercel.app/pro")
      .then((res) => res.json())
      .then((data) => setPro(data));
  }, []);
  return (
    <div className="px-4 py-10 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white sm:px-6 lg:px-20">
      <div className="mb-10 text-center">
        <h1
          data-aos="slide-left"
          className="text-3xl font-extrabold text-orange-700 sm:text-4xl"
        >
          Popular Services
        </h1>
        <p
          data-aos="slide-left"
          className="pt-3 text-sm font-semibold text-gray-600 sm:text-base"
        >
          Check out some of our most popular services.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
        {pro.map((pros) => (
          <PCard key={pros._id} pros={pros} />
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
