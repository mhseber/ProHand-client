import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const ManageService = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <Helmet>
                <title>ManageService || ProHand</title>
            </Helmet>
            <div
                className="hero bg-orange-500 ">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md pt-5">
                        <h1 data-aos="slide-left" className="mb-5 text-5xl font-bold">Manage Your Services</h1>
                        <p data-aos="slide-left" className="mb-5">
                            View, update, or delete your services easily.
                        </p>

                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-up" className="text-5xl font-bold">No services found.</h1>
                        <p data-aos="fade-up" className="py-6">
                            It looks like you haven`t added any services yet.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;