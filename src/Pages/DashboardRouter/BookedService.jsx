import BookedServices from "../../assets/BookedServices.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BookedService = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <div
                className="hero "
                style={{
                    backgroundImage: `url(${BookedServices})`
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md pt-5">
                        <h1 className="mb-5 text-5xl font-bold"> Your Trusted hub for Booked Services ....</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-black text-2xl font-bold text-center pt-5 pb-10">Your Booked Services</h1>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 data-aos="fade-up" className="text-5xl font-bold">No services found.</h1>
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