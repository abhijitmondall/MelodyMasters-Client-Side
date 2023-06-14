import { Link } from "react-router-dom";
import ErrorImg from "./../../assets/error.svg";
import PageTitle from "../../UI/PageTitle";

const ErrorPage = () => {
  return (
    <>
      <section className="w-full h-full bg-gradient">
        <PageTitle>MelodyMasters | 404</PageTitle>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <h3 className="text-textH3 font-bold text-colorTertiary">
            Not Found!
          </h3>
          <img src={ErrorImg} alt="" className="w-full h-[30rem]" />

          <Link to="/">
            <button className="text-textH3 font-bold text-colorPrimary btn btn-outline btn-accent normal-case h-auto px-[2.5rem] py-[1rem]">
              Go To Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
