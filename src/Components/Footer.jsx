import Logo from "../assets/logo.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <footer className="footer bg-gray-950  text-base-content p-10">
                <nav data-aos="fade-up" className="text-gray-400">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav data-aos="fade-up" className="text-gray-400">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav data-aos="fade-up" className="text-gray-400">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-gray-950  text-base-content border-gray-500 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img data-aos="fade-up" className="w-16" src={Logo} alt="logo" />
                    <p data-aos="fade-up" className=" text-3xl font-extrabold text-orange-600 pl-5"><i>ProHand</i></p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div data-aos="slide-right" className="grid grid-flow-col gap-4 text-3xl text-white">
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                    {/* Copyright Information */}
                    <div data-aos="slide-left" className="mt-4 md:mt-0  md:text-right text-sm text-gray-500 pt-4  ">
                        &copy; {new Date().getFullYear()} ProHand. All rights
                        reserved.
                    </div>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;