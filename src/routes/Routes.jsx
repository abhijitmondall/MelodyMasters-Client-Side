import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/instructors",
        element: <Instructors />,
      },

      {
        path: "/classes",
        element: <Classes />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
