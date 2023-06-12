import { NavLink } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import { MdManageHistory } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/manageClasses"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <MdManageHistory />
          </span>
          Manage Classes
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <FcManager />
          </span>
          Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminMenu;
