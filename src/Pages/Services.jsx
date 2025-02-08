// import serverBg from "../assets/services.webp"
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { Helmet } from "react-helmet";
// const Services = () => {
//     // Initialize AOS
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);
//     const services = [
//         {

//             name: "Website Development",
//             description:
//                 "Professional website development for businesses.",
//             imgSrc:
//                 "https://blog.emb.global/wp-content/uploads/2024/04/E-commerce-Website-Development-1024x574.webp",
//         },
//         {

//             name: "Graphic Design",
//             description:
//                 "Custom graphic design services for branding.",
//             imgSrc:
//                 "https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=",
//         },
//         {

//             name: "SEO Optimization",
//             description:
//                 "Boost your website's traffic with SEO services.",
//             imgSrc:
//                 "https://media.istockphoto.com/id/1218694225/photo/seo-search-engine-optimization-business-concept.jpg?s=612x612&w=0&k=20&c=BuAoQrSUFgbxcO9A8ED7F6Q7Dyj4XHjIQBT_RgfIP-8=",
//         },
//         {

//             name: "Digital Marketing",
//             description:
//                 "Grow your business with tailored marketing plans.",
//             imgSrc:
//                 "https://media.istockphoto.com/id/1936789233/photo/human-use-phone-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of.jpg?s=612x612&w=0&k=20&c=jpXjddGQ_gLe1sv7x8f9Qdg_mmVPU3olye-gjwYR2Nk=",
//         },
//         {

//             name: "Content Writing",
//             description:
//                 "Engaging content writing for blogs and websites.",
//             imgSrc:
//                 "https://www.growandconvert.com/wp-content/uploads/2022/01/seo-content-writing.png",
//         },
//         {

//             name: "Mobile App Development",
//             description:
//                 "High-quality mobile applications for all platforms.",
//             imgSrc:
//                 "https://community.nasscom.in/sites/default/files/media/images/Untitled%20design%20%2826%29_0.png",
//         },
//     ];
//     return (
//         <div>
//             <Helmet>
//                 <title>Services || ProHand</title>
//             </Helmet>
//             <div
//                 className="hero "
//                 style={{
//                     backgroundImage: `url(${serverBg})`
//                 }}>
//                 <div className="hero-overlay bg-opacity-60"></div>
//                 <div className="hero-content text-neutral-content text-center">
//                     <div className="max-w-md pt-5">
//                         <h1 className="mb-5 text-5xl font-bold">Explore Our All Services</h1>
//                         <p className="mb-5">
//                             Providing high-quality Electronics gadgets and maintenance services.
//                         </p>

//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-center text-4xl text-orange-600 font-extrabold pt-10 pb-10">All Services</h1>
//             {/*card  */}
//             <div className="dark:bg-gradient-to-r dark:from-yellow-900 dark:via-blue-900 dark:to-gray-500 py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-200 via-transparent/30 to-gray-300">
//                 <div className="max-w-7xl mx-auto text-center">


//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {services.map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:bg-gray-800"
//                                 data-aos="fade-up"
//                                 data-aos-delay={index * 100}
//                             >
//                                 <div className="relative aspect-w-16 aspect-h-9">
//                                     <img
//                                         className="rounded-t-lg object-cover"
//                                         src={service.imgSrc}
//                                         alt={service.title}
//                                     />
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold mb-1">{service.title}</h3>
//                                     <h4 className="text-md font-semibold text-blue-600 mb-2">
//                                         {service.name}
//                                     </h4>
//                                     <p className="text-gray-600 dark:text-gray-300">
//                                         {service.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Pagination */}
//                     <div className="container mx-auto pt-10 pb-12 flex items-center justify-center flex-wrap gap-3 space-x-4">
//                         {/* Previous Button */}
//                         <button

//                             className="px-2 md:px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 shadow-md flex items-center space-x-2"
//                         >
//                             <span>&larr;</span>
//                             <span>Previous</span>
//                         </button>

//                         {/* Page Numbers */}
//                         <button className="btn">1</button>
//                         <button className="btn">2</button>
//                         <button className="btn">3</button>
//                         <button className="btn">4</button>
//                         <button className="btn">5</button>
//                         {/* Next Button and Dropdown */}
//                         <div className="relative flex items-center space-x-2">
//                             <button

//                                 className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 shadow-md flex items-center space-x-2"
//                             >
//                                 <span>Next</span>
//                                 <span>&rarr;</span>
//                             </button>

//                             {/* Dropdown */}

//                             {/* Dropdown Menu */}
//                             <select

//                                 className="w-14 py-1.5 rounded-md border border-gray-300 text-gray-200 dark:text-gray-300 shadow-md focus:outline-none dark:bg-gray-700 dark:border-gray-700"
//                             >
//                                 <option value="6">6</option>
//                                 <option value="7">7</option>
//                                 <option value="8">8</option>
//                                 <option value="9">9</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;


import { useState, useEffect } from "react";
import serverBg from "../assets/services.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const services = [
        { name: "Website Development", description: "Professional website development for businesses.", imgSrc: "https://blog.emb.global/wp-content/uploads/2024/04/E-commerce-Website-Development-1024x574.webp" },
        { name: "Graphic Design", description: "Custom graphic design services for branding.", imgSrc: "https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=" },
        { name: "SEO Optimization", description: "Boost your website's traffic with SEO services.", imgSrc: "https://media.istockphoto.com/id/1218694225/photo/seo-search-engine-optimization-business-concept.jpg?s=612x612&w=0&k=20&c=BuAoQrSUFgbxcO9A8ED7F6Q7Dyj4XHjIQBT_RgfIP-8=" },
        { name: "Digital Marketing", description: "Grow your business with tailored marketing plans.", imgSrc: "https://media.istockphoto.com/id/1936789233/photo/human-use-phone-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of.jpg?s=612x612&w=0&k=20&c=jpXjddGQ_gLe1sv7x8f9Qdg_mmVPU3olye-gjwYR2Nk=" },
        { name: "Content Writing", description: "Engaging content writing for blogs and websites.", imgSrc: "https://www.growandconvert.com/wp-content/uploads/2022/01/seo-content-writing.png" },
        { name: "Mobile App Development", description: "High-quality mobile applications for all platforms.", imgSrc: "https://community.nasscom.in/sites/default/files/media/images/Untitled%20design%20%2826%29_0.png" },
    ];

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(services.length / itemsPerPage);

    const currentServices = services.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Services || ProHand</title>
            </Helmet>
            <div className="hero" style={{ backgroundImage: `url(${serverBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md pt-5">
                        <h1 className="mb-5 text-5xl font-bold">Explore Our All Services</h1>
                        <p className="mb-5">Providing high-quality Electronics gadgets and maintenance services.</p>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl text-orange-600 font-extrabold pt-10 pb-10">All Services</h1>

            {/* Services Grid */}
            <div className="dark:bg-gradient-to-r dark:from-yellow-900 dark:via-blue-900 dark:to-gray-500 py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-200 via-transparent/30 to-gray-300">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:bg-gray-800" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="relative aspect-w-16 aspect-h-9">
                                    <img className="rounded-t-lg object-cover" src={service.imgSrc} alt={service.name} />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="container mx-auto pt-10 pb-12 flex items-center justify-center gap-3">
                        {/* Previous Button */}
                        <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 shadow-md disabled:opacity-50">
                            &larr; Previous
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`btn ${currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-200"}`}>
                                {i + 1}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 shadow-md disabled:opacity-50">
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;