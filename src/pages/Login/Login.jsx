import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";

const Login = () => {
  const { user, login, error, setError, loginWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  let isFail = null;

  const handleLoginForm = async (e) => {
    try {
      e.preventDefault();

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      await login(email, password);
      navigate(path, { replace: true });
      form.reset();
    } catch (err) {
      isFail = true;
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
            {isFail && <p className="text-warning"> {error}</p>}
          </div>

          <div className="card flex-shrink-0 w-full max-w-[50rem] shadow-2xl bg-base-100">
            <form
              onSubmit={handleLoginForm}
              className="card-body form flex gap-7 px-[3.2rem] py-[6rem]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
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
