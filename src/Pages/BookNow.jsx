import { useState } from "react";

const BookNow = () => {
  const [showModal, setShowModal] = useState(true);

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
            className="text-gray-600 hover:text-gray-900"
          >
            <span className="text-2xl font-bold dark:text-gray-200">
              &times;
            </span>
          </button>
        </div>

        <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Service ID */}
            <div>
              <label className="block text-white">Service ID</label>
              <input
                type="text"
                name="serviceId"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Service Name */}
            <div>
              <label className="block text-white">Service Name</label>
              <input
                type="text"
                name="serviceName"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Service Image */}
            <div>
              <label className="block text-white">Service Image</label>
              <input
                type="text"
                name="serviceImage"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Provider Email */}
            <div>
              <label className="block text-white">Provider Email</label>
              <input
                type="text"
                name="providerEmail"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Provider Name */}
            <div>
              <label className="block text-white">Provider Name</label>
              <input
                type="text"
                name="providerName"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Current User Email */}
            <div>
              <label className="block text-white">Current User Email</label>
              <input
                type="text"
                name="userEmail"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Current User Name */}
            <div>
              <label className="block text-white">Current User Name</label>
              <input
                type="text"
                name="userName"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Service Taking Date */}
            <div>
              <label className="block text-white">Service Taking Date</label>
              <input
                type="date"
                name="serviceDate"
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>

            {/* Special Instructions */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-white">Special Instructions</label>
              <textarea
                name="specialInstructions"
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
                placeholder="Anything like address, area, customized service plan..."
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-white">Price</label>
              <input
                type="text"
                name="price"
                readOnly
                className="w-full p-3 mt-2 bg-white border rounded-lg outline-none"
              />
            </div>
          </div>

          {/* Purchase Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-800 hover:bg-green-700 dark:text-gray-300"
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
