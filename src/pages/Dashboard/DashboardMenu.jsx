import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div className="h-[100vh] w-full bg-colorSecondary p-[3.2rem] rounded-l-[2rem]">
      <ul className="flex flex-col gap-[1.6rem] mt-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/selectedClasses"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            My Selected Classes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/enrolledClasses"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            My Enrolled Classes
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            Payment History
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
