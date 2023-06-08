import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses />,
      },

      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses />,
      },

      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
