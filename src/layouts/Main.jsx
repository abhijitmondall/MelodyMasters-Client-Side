import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Main = () => {
  // const location = useLocation();
  const isPath = false;
  // "/login" === location.pathname || "/register" === location.pathname;

  return (
    <>
      {!isPath && <Header />}

      <main>
        <Outlet />
      </main>

      {!isPath && <Footer />}

      <ScrollRestoration />
    </>
  );
};

export default Main;
