import Hero from "../Components/Hero";
import ExtraSectionsOne from "./ExtraSectionsOne";
import ExtraSectionsTwo from "./ExtraSectionsTwo";
import PopularServices from "./PopularServices";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || TechAid</title>
      </Helmet>
      <Hero></Hero>
      <ExtraSectionsOne></ExtraSectionsOne>
      <ExtraSectionsTwo></ExtraSectionsTwo>
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;
