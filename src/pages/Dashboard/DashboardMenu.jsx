import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { GiGraduateCap, GiTeacher, GiMusicalScore } from "react-icons/gi";
import StudentMenu from "./Student/StudentMenu";
import useUsers from "../../hooks/useUsers";
import InstructorMenu from "./Instructor/InstructorMenu";
import AdminMenu from "./Admin/AdminMenu";

const DashboardMenu = () => {
  const { users } = useUsers();

  return (
    <div className="w-full bg-colorSecondary p-[1.2rem] rounded-l-[2rem]">
      <div className="flex items-center gap-5 text-textH2 text-colorGreyDark4 p-[1.2rem]">
        <span>
          <GiMusicalScore />
        </span>
        <h2>MelodyMasters</h2>
      </div>
      <ul className="flex flex-col gap-[1.6rem] mt-10 menu text-textBody font-bold text-colorGreyLight4 rounded-box">
        <li>
          <NavLink
            to="/dashboard/"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            <span className="mt-[-3px]">
              <FcHome />
            </span>
            Dashboard
          </NavLink>
        </li>

        {users?.role === "Student" && <StudentMenu />}
        {users?.role === "Instructor" && <InstructorMenu />}
        {users?.role === "Admin" && <AdminMenu />}

        <li className="border-t-[1px] mt-[6rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-colorPrimary" : "my-3"
            }
          >
            <span className="mt-[-3px]">
              <FcHome />
            </span>
            Home
          </NavLink>

          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive ? "text-colorPrimary" : "my-3"
            }
          >
            <span>
              <GiGraduateCap />
            </span>
            All Classes
          </NavLink>

          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive ? "text-colorPrimary" : "my-3"
            }
          >
            <span>
              <GiTeacher />
            </span>
            Instructors
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
