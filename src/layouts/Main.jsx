import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Main = () => {
  const location = useLocation();
  const isPathLogin = "/login" === location.pathname;

  return (
    <>
      {!isPathLogin && <Header />}

      <main>
        <Outlet />
      </main>

      {!isPathLogin && <Footer />}

      <ScrollRestoration />
    </>
  );
};

export default Main;
