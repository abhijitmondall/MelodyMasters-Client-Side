import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../UI/Spinner";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
  const { loading } = useAuth();
  const users = useUsers();

  const location = useLocation();

  if (loading) return <Spinner />;

  if (users?.role !== "Admin") return;

  if (users?.role === "Admin") return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
