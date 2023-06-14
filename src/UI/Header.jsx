import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import logo from "./../assets/MelodyMasters.gif";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CgDarkMode } from "react-icons/cg";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { user, logout } = useAuth();
  const { handleTheme } = useTheme();

  const logoutHandler = () => {
    try {
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  const listItems = () => {
    return (
      <>
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
            to="/instructors"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes"
            className={({ isActive }) => (isActive ? "text-colorPrimary" : "")}
          >
            Classes
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-colorPrimary" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
        )}
      </>
    );
  };

  return (
    <header>
      <div className="bg-colorSecondary p-[1rem] text-teal-50">
        <div className="container flex justify-between ">
          <div className="flex gap-10">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
          <div>
            <p>admin@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems()}
            </ul>
          </div>

          <figure>
            <img src={logo} alt="MelodyMasters" className="w-full" />
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-textH6">
            {listItems()}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-[3rem] mt-[.7rem]">
            <button
              onClick={handleTheme}
              className="text-textH2"
              title="Change Theme Mode!"
            >
              <CgDarkMode />
            </button>
          </div>

          {user && (
            <div className="header__user-wrap flex items-center gap-3">
              <img
                title={user?.displayName || ""}
                src={user.photoURL}
                alt={user?.displayName || ""}
                className="h-[5.5rem] rounded-[50%] object-cover"
              />

              <div>
                <button
                  onClick={logoutHandler}
                  className="btn btn-outline btn-accent text-textH5 normal-case"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {!user && (
            <Link
              to="/login"
              className="btn btn-outline btn-accent text-textH5 normal-case"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
