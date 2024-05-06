import { Link } from "react-router-dom";

const NoProductFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-6xl mb-5">No Products Found!</h2>
        <Link to={"/addproduct"}>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md mr-4">
            Add Product
          </button>
        </Link>
        <Link to={"/"}>
          <button className="bg-[#2B3440] text-white px-4 py-2 rounded-md mr-2">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoProductFound;
