import { useEffect, useState } from "react";
import PCard from "./PCard";
import Aos from "aos";
import "aos/dist/aos.css";



const PopularServices = () => {
    const [pro, setPro] = useState([])
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    useEffect(() => {
        fetch('https://pro-hand-server.vercel.app/pro')
            .then(res => res.json())
            .then(data => setPro(data))
    }, [])
    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="text-center pt-20">
                <h1 data-aos="slide-left" className="text-4xl font-extrabold text-orange-700">Popular Services</h1>
                <p data-aos="slide-left" className="font-bold text-gray-600 pt-3 pb-4">Check out some of our most popular services.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {
                    pro.map(pros => <PCard key={pro._id} pros={pros}></PCard>)
                }
            </div>
        </div>
    );
};

export default PopularServices;