// import Logo from "../assets/logo.png";
// import facebook from "../assets/facebook.png";
// import linkedin from "../assets/linkedin.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);
//   return (
//     <div>
//       <footer className="p-10 footer bg-gray-950 text-base-content">
//         <nav data-aos="fade-up" className="text-gray-400">
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>
//         <nav data-aos="fade-up" className="text-gray-400">
//           <h6 className="footer-title">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav data-aos="fade-up" className="text-gray-400">
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Cookie policy</a>
//         </nav>
//       </footer>
//       <footer className="px-10 py-4 border-t border-gray-500 footer bg-gray-950 text-base-content">
//         <aside className="items-center grid-flow-col">
//           <img data-aos="fade-up" className="w-16" src={Logo} alt="logo" />
//           <p
//             data-aos="fade-up"
//             className="pl-5 text-3xl font-extrabold text-orange-600 "
//           >
//             <i>TechAid</i>
//           </p>
//         </aside>
//         <nav className="md:place-self-center md:justify-self-end">
//           <div
//             data-aos="slide-right"
//             className="grid grid-flow-col gap-4 text-3xl text-white"
//           >
//             <img src={facebook} alt="" />
//             <img src={linkedin} alt="" />
//           </div>
//           {/* Copyright Information */}
//           <div
//             data-aos="slide-left"
//             className="pt-4 mt-4 text-sm text-gray-500 md:mt-0 md:text-right "
//           >
//             &copy; {new Date().getFullYear()} ProHand. All rights reserved.
//           </div>
//         </nav>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import Logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="pt-12 text-gray-400 bg-gray-950">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo and Description */}
        <div data-aos="fade-up">
          <img src={Logo} alt="logo" className="w-16 mb-4" />
          <h2 className="text-2xl font-bold text-orange-600">TechAid</h2>
          <p className="mt-2 text-sm">
            We’re committed to delivering the best tech repair and service
            experience.
          </p>
        </div>

        {/* Services */}
        <div data-aos="fade-up">
          <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="transition hover:text-orange-500">Branding</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Design</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Marketing</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Advertisement</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div data-aos="fade-up">
          <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="transition hover:text-orange-500">About Us</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Contact</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Jobs</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Press Kit</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div data-aos="fade-up">
          <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="transition hover:text-orange-500">Terms of Use</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Privacy Policy</a>
            </li>
            <li>
              <a className="transition hover:text-orange-500">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col-reverse items-center justify-between gap-4 px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-12 md:flex-row">
        {/* Copyright */}
        <p
          data-aos="slide-left"
          className="w-full text-sm text-center text-gray-400 md:w-auto"
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-orange-500">TechAid</span>. All
          rights reserved.
        </p>

        {/* Social Icons */}
        <div data-aos="slide-right" className="flex gap-4">
          <img
            src={facebook}
            alt="Facebook"
            className="w-10 h-10 transition-transform hover:scale-110"
          />
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-10 h-10 transition-transform hover:scale-110"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
