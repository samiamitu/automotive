import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const PrivateError = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-6xl">Please Login First</h2>
        <Link to={"/login"}>
          <button className="btn border-none bg-gray-400 m-5 mx-auto my-8">
            Login
            <span>
              <FiLogIn></FiLogIn>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PrivateError;
