

const PCard = ({ pros }) => {
    const { serviceImage, serviceName, serviceDescription, providerImage, providerName, price } = pros
    return (
        <div className="max-w-7xl mx-auto">
            <div className="card card-compact bg-base-100 lg:w-[600px] shadow-xl">
                <figure>
                    <img
                        className="rounded-t-lg object-cover"
                        src={serviceImage}
                        alt="img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-gray-950 font-extrabold">{serviceName}</h2>
                    <p className="font-bold text-gray-600">{serviceDescription}</p>
                    <p className="text-gray-700">Service Charge:{price}</p>
                    <div className="  border-t border-dashed border-gray-700">
                        <div className="text-xl font-extrabold text-orange-700 pt-3"><h2>Provider:</h2></div>
                        <div className=" flex pt-3">
                            <img className="w-10" src={providerImage} alt="" />
                            <p className="pt-4 pl-2 text-black font-extrabold">{providerName}</p>
                        </div>
                    </div>


                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-r from-gray-500 to-gray-800 font-semibold text-white ">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCard;