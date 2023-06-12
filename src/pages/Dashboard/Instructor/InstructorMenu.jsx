import { NavLink } from "react-router-dom";
import { GiGraduateCap } from "react-icons/gi";
import { MdAddPhotoAlternate } from "react-icons/md";

const InstructorMenu = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/addClass"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <MdAddPhotoAlternate />
          </span>
          Add a Class
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/myClasses"
          className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
        >
          <span>
            <GiGraduateCap />
          </span>
          My Classes
        </NavLink>
      </li>
    </>
  );
};

export default InstructorMenu;
