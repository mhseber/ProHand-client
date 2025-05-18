// import extra1 from "../assets/extra1.jpg";
// import { FaLaptop } from "react-icons/fa6";
// import { IoDesktopSharp } from "react-icons/io5";
// import { FaCamera } from "react-icons/fa";
// import { MdOutlinePhoneIphone } from "react-icons/md";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// const ExtraSectionsOne = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//   }, []);
//   return (
//     <div className="min-h-screen text-gray-900 bg-gray-100 hero dark:bg-gray-800 dark:text-white">
//       <div className="flex-col hero-content lg:flex-row-reverse">
//         <img
//           data-aos="fade-up"
//           data-aos-delay="400"
//           src={extra1}
//           className="w-[400px] rounded-lg shadow-2xl shadow-black dark:shadow-white mt-6 mr-6"
//         />
//         <div className="pr-40">
//           <h1 data-aos="slide-left" className="pb-4 text-orange-700">
//             ABOUT SOMETHING
//           </h1>
//           <h1 data-aos="slide-left" className="pb-4 text-5xl font-bold">
//             It’s Our <span className="text-orange-700">Honour</span>, To <br />
//             Be With <span className="text-orange-700">You</span>
//           </h1>
//           <p
//             data-aos="slide-left"
//             className="py-6 text-black dark:text-gray-400"
//           >
//             There are many variations of passages of electronics Services, but
//             the majority have <br /> suffered alteration in some form, by
//             injected humour, or randomised words which dont <br /> look even
//             slightly believable. by injected humour, or randomised words which
//             don't look even
//           </p>
//           <div
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="grid grid-cols-2"
//           >
//             <div>
//               <h1 className="text-2xl font-semibold text-black dark:text-white">
//                 <FaLaptop className="inline mr-2" />
//                 Laptop Repair
//               </h1>
//               <p className="pt-5 text-gray-600 dark:text-gray-400">
//                 There are many variations of passages of electronics repair,{" "}
//                 <br />
//                 but the majority have suffered alteration
//               </p>
//             </div>
//             <div>
//               <h1 className="text-2xl font-semibold text-black dark:text-white">
//                 <FaCamera className="inline mr-2" />
//                 Camera Repair
//               </h1>
//               <p className="pt-5 text-gray-600 dark:text-gray-400">
//                 There are many variations of passages of electronics repair,{" "}
//                 <br /> but the majority have suffered alteration
//               </p>
//             </div>
//             <div>
//               <h1 className="pt-5 text-2xl font-semibold text-black dark:text-white">
//                 <IoDesktopSharp className="inline mr-2" /> Desktop Repair
//               </h1>
//               <p className="pt-5 text-gray-600 dark:text-gray-400">
//                 There are many variations of passages of electronics repair,{" "}
//                 <br /> but the majority have suffered alteration
//               </p>
//             </div>
//             <div>
//               <h1 className="pt-5 text-2xl font-semibold text-black dark:text-white">
//                 {" "}
//                 <MdOutlinePhoneIphone className="inline mr-2" /> Phone Repair
//               </h1>

//               <p className="pt-5 text-gray-600 dark:text-gray-400">
//                 There are many variations of passages of electronics repair,{" "}
//                 <br /> but the majority have suffered alteration
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExtraSectionsOne;

import extra1 from "../assets/extra1.jpg";
import { FaLaptop } from "react-icons/fa6";
import { IoDesktopSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExtraSectionsOne = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white lg:px-0">
      <div className="flex flex-col-reverse items-center justify-between gap-10 mx-auto hero-content lg:flex-row-reverse max-w-7xl">
        {/* Image */}
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          src={extra1}
          alt="About"
          className="w-full max-w-sm rounded-lg shadow-2xl lg:max-w-lg shadow-black dark:shadow-white"
        />

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pr-20">
          <h3
            data-aos="slide-left"
            className="pb-4 text-center text-orange-700 lg:text-left"
          >
            ABOUT SOMETHING
          </h3>
          <h1
            data-aos="slide-left"
            className="pb-4 text-4xl font-bold text-center md:text-5xl lg:text-left"
          >
            It’s Our <span className="text-orange-700">Honour</span>, To <br />
            Be With <span className="text-orange-700">You</span>
          </h1>
          <p
            data-aos="slide-left"
            className="py-6 text-sm text-center text-black md:text-base dark:text-gray-400 lg:text-left"
          >
            There are many variations of passages of electronics Services, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. By injected humour, or randomised words which don't look
            even.
          </p>

          {/* Services Grid */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {/* Item 1 */}
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <FaLaptop /> Laptop Repair
              </h2>
              <p className="pt-3 text-sm text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair, but
                the majority have suffered alteration.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <FaCamera /> Camera Repair
              </h2>
              <p className="pt-3 text-sm text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair, but
                the majority have suffered alteration.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h2 className="flex items-center gap-2 pt-3 text-xl font-semibold">
                <IoDesktopSharp /> Desktop Repair
              </h2>
              <p className="pt-3 text-sm text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair, but
                the majority have suffered alteration.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h2 className="flex items-center gap-2 pt-3 text-xl font-semibold">
                <MdOutlinePhoneIphone /> Phone Repair
              </h2>
              <p className="pt-3 text-sm text-gray-600 dark:text-gray-400">
                There are many variations of passages of electronics repair, but
                the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionsOne;
