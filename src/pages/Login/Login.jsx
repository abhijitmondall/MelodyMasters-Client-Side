import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user, login, error, setError, loginWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  let isSuccess = null;

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate(path, { replace: true });
      reset();
    } catch (err) {
      isSuccess = false;
      setError(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      navigate(path, { replace: true });

      if (!res.ok) throw new Error(res.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full max-w-[100rem] flex flex-col">
          <div className="text-center ">
            <h1 className="text-textH1 font-bold text-colorPrimary flex items-center gap-3">
              <span>
                <IoMdLogIn />
              </span>
              Login now!
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered"
                />

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
      </div>
    </section>
  );
};

export default Login;
