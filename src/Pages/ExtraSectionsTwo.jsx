import one from "../../src/assets/1.jpg"
import two from "../../src/assets/2.jpg"
import three from "../../src/assets/3.jpg"
import four from "../../src/assets/4.jpg"
const ExtraSectionsTwo = () => {
    return (
        <div className=" bg-base-200 pt-10 pb-10 ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-xl text-orange-600 font-bold"> Work Gallery</h1>
                    <h1 className="text-5xl text-orange-700 font-extrabold">EleCron Work</h1>
                    <p className="py-6 text-black">
                        There are many variations of passages of electronics repair, but the majority have suffered alteration in azer duskam
                    </p>
                    <div className="grid grid-cols-4 w-[400px] ">
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                        <img src={four} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionsTwo;