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
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../pages/404/ErrorPage";

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

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

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

      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
