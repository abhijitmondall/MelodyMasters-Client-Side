import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import "./AddClassForm.css";
import { useForm } from "react-hook-form";
import useAxiosFetch from "../../../hooks/useAxiosFetch";

const img_hosting_api_key = import.meta.env.VITE_IMG_UPLOAD_API_KEY;

const AddClassForm = ({ info, children, methodType, className }) => {
  const { user, error, setError } = useAuth();
  const { axiosSecureFetch } = useAxiosFetch();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_api_key}`;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.classPicture[0]);

      const res = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const newData = await res.json();
      const imgURL = newData.data.display_url;

      const classInfo = {
        classImage: imgURL,
        className: data.name,
        instructorName: user?.displayName,
        instructorEmail: user?.email,
        instructorPhoto: user?.photoURL,
        totalSeats: data.availableSeats,
        price: data.classPrice,
      };

      if (newData) {
        const res = await axiosSecureFetch.post("classes", classInfo);
        if (res) {
          Swal.fire(
            `${
              info
                ? "Successfully Updated The Class!"
                : "Successfully Added A New Class!"
            }`
          );
          reset();
        }
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`form bg-gradient ${className?.className || ""}`}
      >
        {error && (
          <p className="text-colorTertiary text-textBody text-center">
            {error}
          </p>
        )}
        <div className="form__input">
          <input
            type="text"
            placeholder="Instructor Name"
            name="instructorName"
            defaultValue={`${user.displayName}`}
            disabled
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />
        </div>

        <div className="form__input">
          <input
            type="text"
            placeholder="Instructor Email"
            name="instructorEmail"
            defaultValue={`${user.email}`}
            disabled
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />
        </div>

        <div className="form__input">
          <input
            type="text"
            placeholder="Class Name"
            name="name"
            {...register("name", { required: true })}
            defaultValue={`${info?.className || ""}`}
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />

          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="form__input">
          <input
            type="text"
            placeholder="Class Price"
            name="classPrice"
            {...register("classPrice", { required: true })}
            defaultValue={`${info?.price || ""}`}
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />

          {errors.classPrice && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="form__input">
          <input
            type="number"
            placeholder="Available Seats"
            name="availableSeats"
            {...register("availableSeats", { required: true })}
            defaultValue={`${info?.availableSeats || ""}`}
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />

          {errors.availableSeats && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="form__input">
          <label htmlFor="file" className="px-[2.4rem]">
            Upload Class Image:
          </label>
          <input
            type="file"
            name="classPicture"
            {...register("classPicture", { required: true })}
            // defaultValue={`${info?.classPicture || ""}`}
            className="w-full text-textH6 px-[2.4rem] py-[1.2rem] rounded-[10rem] outline-none border-none"
          />

          {errors.classPicture && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="form__btn w-full text-textH5 text-white font-bold py-[1rem] px-[3rem] border-none rounded-[10rem] cursor-pointer bg-colorPrimary mt-[1rem]"
        >
          {children}
        </button>
      </form>
    </>
  );
};

export default AddClassForm;
