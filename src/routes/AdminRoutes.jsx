import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../UI/Spinner";
import useUsers from "../hooks/useUsers";
import Swal from "sweetalert2";

const AdminRoutes = ({ children }) => {
  const { users, loading } = useUsers();

  const location = useLocation();

  if (loading) return <Spinner />;

  if (users?.role === "Admin") return children;

  if (users?.role !== "Admin") {
    Swal.fire(
      "You don't have permission to access this route! Please Login as an Administrator!"
    );
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
