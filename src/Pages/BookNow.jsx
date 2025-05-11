import { useState } from "react";
import Swal from "sweetalert2";

const BookNow = ({ service, user }) => {
  const [showModal, setShowModal] = useState(true);

  const [formData, setFormData] = useState({
    serviceId: service?.serviceId || "",
    serviceName: service?.serviceName || "",
    serviceImage: service?.serviceImage || "",
    providerEmail: service?.providerEmail || "",
    providerName: service?.providerName || "",
    price: service?.price || "",
    userEmail: user?.userEmail || "",
    userName: user?.userName || "",
    serviceDate: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("bookedServices")) || [];
    saved.push(formData);
    localStorage.setItem("bookedServices", JSON.stringify(saved));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Service Booked!",
      showConfirmButton: false,
      timer: 1500,
    });
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-lg max-h-screen p-6 overflow-y-auto bg-orange-700 rounded-lg md:p-8 sm:max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Book Service
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-3xl font-bold text-gray-200 hover:text-white"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "serviceId",
              "serviceName",
              "serviceImage",
              "providerEmail",
              "providerName",
              "userEmail",
              "userName",
              "price",
            ].map((field) => (
              <div key={field}>
                <label className="block text-white capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-white">Service Taking Date</label>
              <input
                type="date"
                name="serviceDate"
                value={formData.serviceDate}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="block text-white">Special Instructions</label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
                placeholder="Anything like address, area, customized service plan..."
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-800 hover:bg-green-700"
            >
              Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
