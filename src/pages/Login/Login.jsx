import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";

const Login = () => {
  const { user, login, error, setError, loginWithGoogle } = useAuth();
  const [isSuccess, setIsSuccess] = useState(true);

  const [inputType, setInputType] = useState("password");
  const [isHide, setIsHide] = useState(true);

  const { axiosFetch } = useAxiosFetch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate(path, { replace: true });
    } catch (err) {
      setIsSuccess(false);
      setError(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const res = await loginWithGoogle();

      // send request
      await axiosFetch.post("users", {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
      });

      navigate(path, { replace: true });
      if (!res.ok) throw new Error(res.message);
    } catch (err) {
      setIsSuccess(false);
      setError(err.message);
    }
  };

  const handlePasswordVisibility = () => {
    let inputCheck = isHide ? "text" : "password";
    setInputType(inputCheck);
    setIsHide(!isHide);
  };

  return (
    <section>
      <div className="hero min-h-screen py-[3rem] bg-base-200">
        {user ? (
          <div className="flex flex-col text-textH1 text-colorPrimary justify-center items-center">
            You are now logged in!
            <Link to="/">
              <button className="btn bg-colorPrimary text-white h-auto py-[1.2rem] text-textH6">
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="hero-content w-full max-w-[100rem] flex flex-col">
            <div className="text-center ">
              <h1 className="text-textH1 font-bold text-colorPrimary flex items-center gap-3">
                <span>
                  <IoMdLogIn />
                </span>
                Login Now!
              </h1>
            </div>

            <div className="card flex-shrink-0 w-full max-w-[50rem] shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body form flex gap-7 px-[3.2rem] py-[6rem]"
              >
                <p className="text-red-600">{!isSuccess ? error : ""}</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />

                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={inputType}
                    name="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="input input-bordered"
                  />

                  <div
                    onClick={handlePasswordVisibility}
                    className="absolute top-[35px] right-[10px] cursor-pointer"
                  >
                    {isHide ? <FaEyeSlash /> : <FaEye />}
                  </div>

                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
                  )}

                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-textBody pt-6"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-colorPrimary text-white h-auto py-[1.2rem] text-textH6"
                  >
                    Login
                  </button>
                  <div className="mt-[1rem]">
                    Don't have an account?
                    <span className="text-colorPrimary underline">
                      <Link to="/register"> Register Now!</Link>
                    </span>
                  </div>
                </div>
              </form>

              <p className="text-center p-y"> OR </p>

              <div className="px-[3.2rem] mt-10 mb-[6rem]">
                <button
                  onClick={googleLogin}
                  className="flex gap-2 items-center justify-center text-textH5 text-colorPrimary border-[1px] py-[.8rem] px-[2.4rem] w-[100%] mx-auto rounded-[3px]"
                >
                  <span className="icon-1x">
                    <FcGoogle />
                  </span>
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
