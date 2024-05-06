import Banner from "../Header/Banner";
import BrandList from "./pageComponents/BrandList";
import BrandSpotlight from "./pageComponents/BrandSpotLight";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="w-[90%] mx-auto">
        <BrandList></BrandList>
        <BrandSpotlight></BrandSpotlight>
      </div>
    </div>
  );
};

export default Home;
