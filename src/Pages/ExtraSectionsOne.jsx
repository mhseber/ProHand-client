import extra1 from "../assets/extra1.jpg"
import { FaLaptop } from "react-icons/fa6";
import { IoDesktopSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
const ExtraSectionsOne = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={extra1}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="pr-40">
                    <h1 className="pb-4 text-orange-700">ABOUT SOMETHING</h1>
                    <h1 className="text-5xl font-bold pb-4">It’s Our <span className="text-orange-700">Honour</span>, To <br />
                        Be With <span className="text-orange-700">You</span></h1>
                    <p className="py-6 text-black">
                        There are many variations of passages of electronics Services, but the majority have <br /> suffered alteration in some form, by injected humour, or randomised words which don't <br /> look even slightly believable. by injected humour, or randomised words which don't look even
                    </p>
                    <div className="grid grid-cols-2">
                        <div>

                            <h1 className="text-2xl font-semibold text-black">
                                <FaLaptop />Laptop Repair</h1>
                            <p className="pt-5 text-gray-600">There are many variations of passages of electronics repair, <br />but the majority have suffered alteration</p>
                        </div>
                        <div>

                            <h1 className="text-2xl font-semibold text-black">
                                <FaCamera />Camera Repair</h1>
                            <p className="pt-5 text-gray-600">There are many variations of passages of electronics repair, <br /> but the majority have suffered alteration</p>
                        </div>
                        <div>

                            <h1 className="text-2xl font-semibold text-black pt-5"> <IoDesktopSharp /> Desktop Repair</h1>
                            <p className="pt-5 text-gray-600">There are many variations of passages of electronics repair, <br /> but the majority have suffered alteration</p>
                        </div>
                        <div>

                            <h1 className="text-2xl font-semibold text-black pt-5"> <MdOutlinePhoneIphone /> Iphone Repair</h1>

                            <p className="pt-5 text-gray-600">There are many variations of passages of electronics repair, <br /> but the majority have suffered alteration</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSectionsOne;