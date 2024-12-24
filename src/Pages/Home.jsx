import Hero from "../Components/Hero";
import ExtraSectionsOne from "./ExtraSectionsOne";
import ExtraSectionsTwo from "./ExtraSectionsTwo";
import PopularServices from "./PopularServices";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ExtraSectionsOne></ExtraSectionsOne>
            <ExtraSectionsTwo></ExtraSectionsTwo>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;