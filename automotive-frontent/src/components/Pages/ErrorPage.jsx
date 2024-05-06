import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-6xl">Not Found!</h2>
        <Link to={"/"}>
          <button className="btn bg-gray-400 hover:text-white m-5 mx-auto">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
