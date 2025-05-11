import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BookedServices from "../../assets/BookedServices.jpg";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const BookedService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookedServices")) || [];
    setServices(saved);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = [...services];
        updated.splice(index, 1);
        localStorage.setItem("bookedServices", JSON.stringify(updated));
        setServices(updated);

        Swal.fire({
          title: "Deleted!",
          text: "Your booking has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>BookedService || TechAid</title>
      </Helmet>

      <div
        className="hero"
        style={{ backgroundImage: `url(${BookedServices})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md pt-5">
            <h1 className="mb-5 text-5xl font-bold">
              Your Trusted hub for Booked Services...
            </h1>
          </div>
        </div>
      </div>

      <h1 className="pt-5 pb-10 text-2xl font-bold text-center text-black">
        Your <span className="text-orange-700">Booked Services</span>
      </h1>

      {services.length === 0 ? (
        <div className="min-h-screen text-gray-900 bg-gray-100 hero dark:bg-gray-800 dark:text-white">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">No services found.</h1>
              <p className="py-6">
                It looks like you haven’t booked any services yet.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 p-4 mx-auto mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 rounded-lg shadow-md bg-base-100"
            >
              <img
                className="object-cover w-24 h-24 rounded-full"
                src={service.serviceImage}
                alt={service.serviceName}
              />
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">
                  {service.serviceName}
                </div>
                <div className="text-xs font-semibold opacity-60">
                  {service.providerName} — {service.serviceDate}
                </div>
              </div>

              <div className="flex flex-col w-full mt-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold">Price</div>
                  <div className="text-xs">${service.price}</div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold">
                    Special Instructions
                  </div>
                  <div className="text-xs">
                    {service.specialInstructions || "N/A"}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDelete(index)}
                className="mt-3 text-white btn btn-xs btn-error"
                title="Delete this booking"
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedService;
