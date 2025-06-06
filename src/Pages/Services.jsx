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
    {
      name: "Website Development",
      description: "Professional website development for businesses.",
      imgSrc:
        "https://blog.emb.global/wp-content/uploads/2024/04/E-commerce-Website-Development-1024x574.webp",
    },
    {
      name: "Graphic Design",
      description: "Custom graphic design services for branding.",
      imgSrc:
        "https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=",
    },
    {
      name: "SEO Optimization",
      description: "Boost your website's traffic with SEO services.",
      imgSrc:
        "https://media.istockphoto.com/id/1218694225/photo/seo-search-engine-optimization-business-concept.jpg?s=612x612&w=0&k=20&c=BuAoQrSUFgbxcO9A8ED7F6Q7Dyj4XHjIQBT_RgfIP-8=",
    },
    {
      name: "Digital Marketing",
      description: "Grow your business with tailored marketing plans.",
      imgSrc:
        "https://media.istockphoto.com/id/1936789233/photo/human-use-phone-with-digital-online-marketing-commerce-sale-website-advertising-promotion-of.jpg?s=612x612&w=0&k=20&c=jpXjddGQ_gLe1sv7x8f9Qdg_mmVPU3olye-gjwYR2Nk=",
    },
    {
      name: "Content Writing",
      description: "Engaging content writing for blogs and websites.",
      imgSrc:
        "https://www.growandconvert.com/wp-content/uploads/2022/01/seo-content-writing.png",
    },
    {
      name: "Mobile App Development",
      description: "High-quality mobile applications for all platforms.",
      imgSrc:
        "https://community.nasscom.in/sites/default/files/media/images/Untitled%20design%20%2826%29_0.png",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const currentServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        <title>Services || TechAid</title>
      </Helmet>
      <div className="hero" style={{ backgroundImage: `url(${serverBg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md pt-5">
            <h1 className="mb-5 text-5xl font-bold">
              Explore Our All Services
            </h1>
            <p className="mb-5">
              Providing high-quality Electronics gadgets and maintenance
              services.
            </p>
          </div>
        </div>
      </div>
      <h1 className="pt-10 pb-10 text-4xl font-extrabold text-center text-orange-600">
        All Services
      </h1>

      {/* Services Grid */}
      <div className="px-4 py-16 dark:bg-gradient-to-r dark:from-yellow-900 dark:via-blue-900 dark:to-gray-500 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-200 via-transparent/30 to-gray-300">
        <div className="mx-auto text-center max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service, index) => (
              <div
                key={index}
                className="transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl dark:bg-gray-800"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    className="object-cover rounded-t-lg"
                    src={service.imgSrc}
                    alt={service.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="container flex items-center justify-center gap-3 pt-10 pb-12 mx-auto">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 font-semibold text-gray-800 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 disabled:opacity-50"
            >
              &larr; Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`btn ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 font-semibold text-gray-800 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 disabled:opacity-50"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
