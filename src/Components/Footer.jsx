import Logo from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-950  text-base-content p-10">
                <nav className="text-gray-400">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-gray-400">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-gray-400">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-gray-950  text-base-content border-gray-500 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img className="w-16" src={Logo} alt="logo" />
                    <p className=" text-3xl font-extrabold text-orange-600 pl-5"><i>ProHand</i></p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-3xl text-white">
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                    {/* Copyright Information */}
                    <div className="mt-4 md:mt-0  md:text-right text-sm text-gray-500 pt-4">
                        &copy; {new Date().getFullYear()} YourWebsiteName. All rights
                        reserved.
                    </div>
                </nav>

            </footer>

        </div>
    );
};

export default Footer;