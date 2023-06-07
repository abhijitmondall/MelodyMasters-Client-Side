import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <ScrollRestoration />
    </>
  );
};

export default Main;
