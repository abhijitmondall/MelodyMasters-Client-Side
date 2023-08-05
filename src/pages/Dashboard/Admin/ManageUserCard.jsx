import useAuth from "../../../hooks/useAuth";
import useAxiosFetch from "../../../hooks/useAxiosFetch";

const ManageUserCard = ({ info, index, handleRefetch }) => {
  const { user } = useAuth();
  const { axiosSecureFetch } = useAxiosFetch();

  const handleInstructor = async (id) => {
    const res = await axiosSecureFetch.patch(`users/${id}`, {
      role: "Instructor",
    });

    if (res) {
      handleRefetch();
    }
  };

  const handleAdmin = async (id) => {
    const res = await axiosSecureFetch.patch(`users/${id}`, {
      role: "Admin",
    });

    if (res) {
      handleRefetch();
    }
  };

  return (
    <div className="grid grid-cols-max-7 items-center gap-[1.6rem] border-b-[1px] p-[1.6rem] text-center bg-colorGreyLight3">
      <div>{index + 1}</div>
      <img
        src={info?.photo}
        alt={info?.name}
        className="w-[80%] rounded-[.8rem]"
      />
      <div>{info?.name}</div>
      <div>{info?.email}</div>
      <div>{info?.role}</div>

      <button
        disabled={
          user?.email === info?.email ||
          info?.role === "Instructor" ||
          info?.role === "Admin"
        }
        onClick={() => handleInstructor(info?._id)}
        className={`${
          user?.email === info?.email ||
          info?.role === "Instructor" ||
          info?.role === "Admin"
            ? "disabled"
            : "btn btn-outline btn-accent text-textBody normal-case h-auto"
        } `}
      >
        Instructor?
      </button>

      <button
        disabled={user?.email === info?.email || info?.role === "Admin"}
        onClick={() => handleAdmin(info?._id)}
        className={`${
          user?.email === info?.email || info?.role === "Admin"
            ? "disabled"
            : "btn btn-outline btn-accent text-textBody normal-case h-auto"
        } `}
      >
        Admin?
      </button>
    </div>
  );
};

export default ManageUserCard;
