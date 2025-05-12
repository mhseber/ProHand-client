// import { Helmet } from "react-helmet";
// const AddAService = () => {
//   return (
//     <div>
//       <div className="min-h-screen bg-slate-300 dark:bg-gray-900">
//         <Helmet>
//           <title>AddAService || TechAid</title>
//         </Helmet>
//         {/* Header Section */}
//         <header
//           className="relative flex items-center justify-center h-64 bg-center bg-no-repeat bg-cover"
//           style={{
//             backgroundImage: "url('/public/Home-repair-1.jpg')",
//           }}
//           data-aos="fade-down"
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           <div className="relative z-10 text-center text-white">
//             <h1 className="text-4xl font-extrabold">Add a New Service</h1>
//             <p className="mt-2 text-lg">
//               Expand your offerings by adding new Electronic Item Repairing
//               Services.
//             </p>
//           </div>
//         </header>

//         {/* Form Section */}
//         <div className="container px-4 py-12 mx-auto dark:bg-gray-900">
//           <div
//             className="max-w-lg p-8 mx-auto bg-white shadow-lg rounded-xl dark:bg-gray-800"
//             data-aos="fade-up"
//           >
//             <h2 className="mb-6 text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
//               Service Information
//             </h2>
//             <form className="space-y-4">
//               {/* Image URL */}
//               <div>
//                 <label
//                   htmlFor="imageUrl"
//                   className="block text-sm font-medium text-gray-600 dark:text-gray-200"
//                 >
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   id="imageUrl"
//                   name="imageUrl"
//                   placeholder="Enter Service image URL"
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
//                   required
//                 />
//               </div>

//               {/* Service Name */}
//               <div>
//                 <label
//                   htmlFor="serviceName"
//                   className="block text-sm font-medium text-gray-600 dark:text-gray-200"
//                 >
//                   Service Name
//                 </label>
//                 <input
//                   type="text"
//                   id="serviceName"
//                   name="serviceName"
//                   placeholder="Enter service name"
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
//                   required
//                 />
//               </div>

//               {/* Price */}
//               <div>
//                 <label
//                   htmlFor="price"
//                   className="block text-sm font-medium text-gray-600 dark:text-gray-200"
//                 >
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   placeholder="Enter price"
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
//                   required
//                 />
//               </div>

//               {/* Service Area */}
//               <div>
//                 <label
//                   htmlFor="serviceArea"
//                   className="block text-sm font-medium text-gray-600 dark:text-gray-200"
//                 >
//                   Service Area
//                 </label>
//                 <input
//                   type="text"
//                   id="serviceArea"
//                   name="serviceArea"
//                   placeholder="Enter service area"
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
//                   required
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-gray-600 dark:text-gray-200"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   placeholder="Enter description"
//                   rows="4"
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 font-semibold text-white transition bg-gray-600 rounded-lg shadow hover:bg-blue-700"
//                 >
//                   Add Service
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAService;

import { useState } from "react";
import { Helmet } from "react-helmet";

const AddAService = ({ addService }) => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    serviceName: "",
    price: "",
    serviceArea: "",
    description: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the data to the parent component
    addService(formData);
    setFormData({
      imageUrl: "",
      serviceName: "",
      price: "",
      serviceArea: "",
      description: "",
    });
  };

  return (
    <div>
      <div className="min-h-screen bg-slate-300 dark:bg-gray-900">
        <Helmet>
          <title>AddAService || TechAid</title>
        </Helmet>
        {/* Header Section */}
        <header
          className="relative flex items-center justify-center h-64 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/public/Home-repair-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-extrabold">Add a New Service</h1>
            <p className="mt-2 text-lg">
              Expand your offerings by adding new Electronic Item Repairing
              Services.
            </p>
          </div>
        </header>

        {/* Form Section */}
        <div className="container px-4 py-12 mx-auto dark:bg-gray-900">
          <div className="max-w-lg p-8 mx-auto bg-white shadow-lg rounded-xl dark:bg-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
              Service Information
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Image URL */}
              <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Enter Service image URL"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                  required
                />
              </div>

              {/* Service Name */}
              <div>
                <label
                  htmlFor="serviceName"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Service Name
                </label>
                <input
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  placeholder="Enter service name"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                  required
                />
              </div>

              {/* Service Area */}
              <div>
                <label
                  htmlFor="serviceArea"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Service Area
                </label>
                <input
                  type="text"
                  id="serviceArea"
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  placeholder="Enter service area"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 font-semibold text-white transition bg-gray-600 rounded-lg shadow hover:bg-blue-700"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAService;
