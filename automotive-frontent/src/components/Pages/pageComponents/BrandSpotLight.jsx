import { Link } from "react-router-dom";

const BrandSpotlight = () => {
  return (
    <div className="py-6 text-center">
      <h2 className="text-3xl font-semibold mb-2">Toyota Spotlight</h2>
      <p className="text-gray-500 mb-4">
        Discover the best products from Toyota.
      </p>
      <img
        src="assets/car.png"
        alt="Toyota"
        className="w-full lg:w-[50%] mx-auto"
      />
      <p className="mt-4 md:w-2/3 mx-auto">
        Toyota is known for its reliability and innovation in the automotive
        industry. Explore a wide range of Toyota vehicles and accessories
        designed to enhance your driving experience.
      </p>
      <Link to={"/brands/toyota"}>
        <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">
          Explore Toyota
        </button>
      </Link>
    </div>
  );
};

export default BrandSpotlight;
