import { NavLink } from "react-router-dom";
import { MdFavorite, MdPayment } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const StudentMenu = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/selectedClasses"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <MdFavorite />
          </span>
          My Selected Classes
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/enrolledClasses"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <GiGraduateCap />
          </span>
          My Enrolled Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/paymentHistory"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <MdPayment />
          </span>
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default StudentMenu;
