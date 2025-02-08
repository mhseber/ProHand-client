import { useState } from "react";



const BookNow = () => {
    const [showModal, setShowModal] = useState(true);

    if (!showModal) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className=" rounded-lg p-6 md:p-8 w-full max-w-lg sm:max-w-3xl bg-orange-800 max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Book Service
                    </h2>
                    <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <span className="font-bold text-2xl dark:text-gray-200">
                            &times;
                        </span>
                    </button>
                </div>

                <form
                // onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* Service ID */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Service ID
                            </label>
                            <input
                                type="text"
                                name="serviceId"
                                // value={formData.serviceId}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Service Name */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Service Name
                            </label>
                            <input
                                type="text"
                                name="serviceName"
                                // value={formData.serviceName}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white outline-none"
                            />
                        </div>

                        {/* Service Image */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Service Image
                            </label>
                            <input
                                type="text"
                                name="serviceImage"
                                // value={formData.serviceImage}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Provider Email */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Provider Email
                            </label>
                            <input
                                type="text"
                                name="providerEmail"
                                // value={formData.providerEmail}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Provider Name */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Provider Name
                            </label>
                            <input
                                type="text"
                                name="providerName"
                                // value={formData.providerName}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Current User Email */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Current User Email
                            </label>
                            <input
                                type="text"
                                name="userEmail"
                                // value={formData.userEmail}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Current User Name */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Current User Name
                            </label>
                            <input
                                type="text"
                                name="userName"
                                // value={formData.userName}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>

                        {/* Service Taking Date */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Service Taking Date
                            </label>
                            <input
                                type="date"
                                name="serviceDate"
                                // value={formData.serviceDate}
                                // onChange={handleChange}
                                className="w-full p-3 mt-2 border bg-white rounded-lg outline-none"
                            />
                        </div>

                        {/* Special Instructions */}
                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-gray-700 dark:text-gray-300">
                                Special Instructions
                            </label>
                            <textarea
                                name="specialInstructions"
                                // value={formData.specialInstructions}
                                // onChange={handleChange}
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                                placeholder="Anything like address, area, customized service plan..."
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                // value={formData.price}
                                readOnly
                                className="w-full p-3 mt-2 border rounded-lg bg-white  outline-none"
                            />
                        </div>
                    </div>

                    {/* Purchase Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-800 text-white rounded-lg font-semibold hover:bg-green-700 dark:text-gray-300"
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
