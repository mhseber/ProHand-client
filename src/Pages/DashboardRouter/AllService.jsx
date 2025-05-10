import Services from "../Services";
import { Helmet } from "react-helmet";

const AllService = () => {
  return (
    <div>
      <Helmet>
        <title>AllService || TechAid</title>
      </Helmet>
      <Services></Services>
    </div>
  );
};

export default AllService;
