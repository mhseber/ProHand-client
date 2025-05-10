import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import acMaintenance from "../../src/assets/ex2/AC Maintenance.jpg";
import SmartTVSetup from "../../src/assets/ex2/smart-TV-Setup.jpg";
import MobileFixing from "../../src/assets/ex2/Mobile-Fixing.jpg";
import LaptopRepair from "../../src/assets/ex2/Laptop Repair.jpg";

const services = [
  {
    title: "Laptop Repair",
    desc: "Fast and reliable laptop repair service.",
    img: LaptopRepair,
  },
  {
    title: "Mobile Fixing",
    desc: "Screen replacement, battery & more.",
    img: MobileFixing,
  },
  {
    title: "Smart TV Setup",
    desc: "Installation & troubleshooting of smart TVs.",
    img: SmartTVSetup,
  },
  {
    title: "AC Maintenance",
    desc: "Professional air conditioner service & support.",
    img: acMaintenance,
  },
];

export default function ExtraSectionsTwo() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="px-4 py-12 bg-white dark:bg-gray-900">
      <div className="mx-auto text-center max-w-7xl">
        <h2
          data-aos="slide-right"
          className="mb-8 text-3xl font-bold text-gray-800 dark:text-white"
        >
          Our <span className="text-orange-700"> Electronic Services</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 transition duration-300 bg-gray-100 shadow dark:bg-gray-800 rounded-2xl hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                data-aos="fade-up"
                data-aos-delay="400"
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-40 mb-4 rounded-xl"
              />
              <h3
                data-aos="slide-right"
                className="text-xl font-semibold text-gray-800 dark:text-white"
              >
                {service.title}
              </h3>
              <p
                data-aos="slide-right"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
