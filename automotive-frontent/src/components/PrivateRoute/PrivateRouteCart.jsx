import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../Spinner/Spinner";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Spinner></Spinner>;

  if (!user?.email) return <Navigate to={'/login'}></Navigate>

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
