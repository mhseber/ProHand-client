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
                <title>ServiceToDo || ProHand</title>
            </Helmet>
            <div className="relative w-full h-72 bg-gradient-to-r from-orange-800 via-gray-900 to-black rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Rotating Decorative Elements */}
                <div className="absolute w-96 h-96 bg-gradient-to-br from-orange-200 via-orange-500 to-gray-800 opacity-20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-72 h-72 bg-gradient-to-br from-orange-200 via-orange-500 to-gray-800 opacity-20 rounded-full "></div>

                <h1 className="relative text-4xl md:text-6xl font-extrabold text-center text-white tracking-wider leading-tight">
                    <span className="block text-gray-300">Your Services</span>
                    <span className="block text-orange-600 mt-2">Booked by Customers</span>
                </h1>

                <p className="relative text-lg md:text-xl font-medium text-center text-gray-200 mt-4">
                    Track, manage, and grow your bookings effortlessly.
                </p>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
            </div>

            <h1 data-aos="fade-up" className="text-4xl font-extrabold text-center mb-10 mt-8 py-12 text-gray-800 ">
                Manage Your Provided Services Below
            </h1>
        </div>
    );
};

export default ServiceToDo;