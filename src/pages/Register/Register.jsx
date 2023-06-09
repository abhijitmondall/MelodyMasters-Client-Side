import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { user, createUser, updateUserProfile, setError, loginWithGoogle } =
    useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isTouched, setIsTouched] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const handleBlur = () => {
    setIsTouched(true);
    setIsPasswordCorrect(`${password}`.trim() === `${confirmPassword}`.trim());
  };

  const onSubmit = async (data) => {
    try {
      if (!isPasswordCorrect) return;

      data.confirmPassword = "";
      await createUser(data.email, data.password);
      await updateUserProfile(data.name, data.userPhoto);
      navigate(path, { replace: true });
      console.log(data, user);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const googleSignUp = async () => {
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
              Register now!
            </h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-[50rem] shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body form flex gap-7 px-[3.2rem] py-[6rem]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="input input-bordered"
                />

                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  placeholder="Email"
                  className="input input-bordered"
                />

                {errors.email?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}

                {errors.email?.type === "pattern" && (
                  <span className="text-red-600">
                    Please Provide a Valid Email!
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />

                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters long!
                  </span>
                )}

                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must be at least one uppercase, one lowercase, &
                    one special character!
                  </span>
                )}

                {errors.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("confirmPassword")}
                  onBlur={handleBlur}
                />

                {!isPasswordCorrect && isTouched && (
                  <span className="text-red-600">Passwords Don't Match!</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="userPhoto"
                  {...register("userPhoto", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.userPhoto && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-colorPrimary text-white h-auto py-[1.2rem] text-textH6"
                >
                  Register
                </button>
                <div className="mt-[1rem]">
                  Already have an account?
                  <span className="text-colorPrimary underline">
                    <Link to="/login"> Login Now!</Link>
                  </span>
                </div>
              </div>
            </form>

            <p className="text-center p-y"> OR </p>

            <div className="px-[3.2rem] mt-10 mb-[6rem]">
              <button
                onClick={googleSignUp}
                className="flex gap-2 items-center justify-center text-textH5 text-colorPrimary border-[1px] py-[.8rem] px-[2.4rem] w-[100%] mx-auto rounded-[3px]"
              >
                <span className="icon-1x">
                  <FcGoogle />
                </span>
                Sign Up With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
