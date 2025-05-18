import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PCard = ({ pros }) => {
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    price,
  } = pros;

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="mx-auto text-gray-900 bg-gray-100 max-w-7xl dark:bg-gray-800 dark:text-white">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="card card-compact bg-base-100 lg:w-[600px] shadow-xl"
      >
        <figure>
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            className="object-cover rounded-t-lg"
            src={serviceImage}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2
            data-aos="slide-left"
            className="text-xl font-extrabold card-title text-gray-950"
          >
            {serviceName}
          </h2>
          <p data-aos="slide-left" className="font-bold text-gray-600">
            {serviceDescription}
          </p>
          <p className="text-gray-700">Service Charge:{price}</p>
          <div className="border-t border-gray-700 border-dashed ">
            <div className="pt-3 text-xl font-extrabold text-orange-700">
              <h2>Provider:</h2>
            </div>
            <div data-aos="fade-up" className="flex pt-3 ">
              <img className="w-10" src={providerImage} alt="" />
              <p className="pt-4 pl-2 font-extrabold text-black">
                {providerName}
              </p>
            </div>
          </div>

          <div className="justify-end card-actions">
            <Link to="viewDetails">
              <button
                data-aos="fade-up"
                className="font-semibold text-white btn bg-gradient-to-r from-gray-500 to-gray-800 "
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCard;
