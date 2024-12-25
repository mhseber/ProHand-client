import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import service from "../assets/banner.jpg"
import me from "../assets/Me.png"
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

const ViewDetails = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);


    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-orange-700">
                    Services Details
                </h1>
                <p className="text-lg dark:text-gray-300 text-gray-600 mt-2">
                    Electronic Item Repairing Services Details
                </p>
            </header>
            <div className=" justify-center items-center">

                <div
                    className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 "
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration="800"
                >
                    <div className="flex gap-3">
                        <img data-aos="fade-up" className="w-10" src={me} alt="" />
                        <div className="text-gray-300">
                            <p data-aos="slide-left" className="pt-4">MH SEBER</p>
                        </div>
                    </div>
                    <div className="bg-gray-500 text-white p-4 text-center">
                        <img data-aos="fade-up" src={service} alt="" />
                    </div>
                    <div className="p-6 ">
                        <div className="text-gray-600 dark:text-gray-300 mb-4 ">
                            <h1 data-aos="slide-right" className="text-3xl font-bold">Electronic Item Repairing Services</h1>
                            <p data-aos="slide-left" className="pt-3">Electronic item repairing services play a crucial role in extending the lifespan of gadgets and appliances, reducing waste, and saving costs for consumers. These services cover a wide range of items, including smartphones, laptops, televisions, and home appliances like refrigerators and washing machines. Skilled technicians diagnose and fix issues such as hardware malfunctions, software glitches, and connectivity problems. By opting for repairs instead of replacements, customers contribute to environmental sustainability by minimizing electronic waste. Reliable repair services also ensure that devices function optimally, improving user experience and efficiency. Additionally, many providers offer warranties, ensuring quality and peace of mind.</p>
                        </div>
                        <h1 data-aos="slide-right" className="text-orange-600 mb-4 text-2xl">
                            Service Provider Info :
                        </h1>
                        <div className="flex gap-3">
                            <img data-aos="fade-up" className="w-10" src={me} alt="" />
                            <div className="text-gray-300">
                                <p data-aos="slide-left">MH SEBER</p>
                                <div className="flex pt-2">
                                    <FaLocationDot />
                                    <p data-aos="slide-left"> Old Dhaka</p>
                                </div>

                            </div>

                        </div>
                        <ul className="text-left space-y-2 text-gray-700 dark:text-gray-300">
                            <div> <p data-aos="slide-left" className="text-gray-300 pt-4">Price: $200</p></div>
                        </ul>
                    </div>
                    <div className="p-4 bg-gray-50 text-center dark:bg-gray-700">
                        <Link to="/auth/login">
                            <button
                                data-aos="fade-up"
                                className=" btn w-40 bg-gradient-to-r from-gray-500 to-gray-800 font-semibold text-white  py-2 px-4 rounded-xl hover:bg-gray-300 transition">

                                <LuLogIn />Sign Up
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewDetails;