import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function ProtectedRoute({ children }) {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <p>Loading....</p>;

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
