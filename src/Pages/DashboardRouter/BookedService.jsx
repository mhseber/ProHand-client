import BookedServices from "../../assets/BookedServices.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const BookedService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Helmet>
        <title>BookedService || TechAid</title>
      </Helmet>
      <div
        className="hero "
        style={{
          backgroundImage: `url(${BookedServices})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md pt-5">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Your Trusted hub for Booked Services ....
            </h1>
          </div>
        </div>
      </div>
      <h1 className="pt-5 pb-10 text-2xl font-bold text-center text-black">
        Your Booked Services
      </h1>
      <div className="min-h-screen text-gray-900 bg-gray-100 hero dark:bg-gray-800 dark:text-white">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              No services found.
            </h1>
            <p data-aos="fade-up" className="py-6">
              It looks like you haven’t booked any services yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedService;
