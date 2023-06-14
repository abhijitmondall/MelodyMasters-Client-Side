import useAxiosFetch from "../../../hooks/useAxiosFetch";

const ManageClassesCard = ({ info, index, handleRefetch }) => {
  const { axiosSecureFetch } = useAxiosFetch();

  const handleStatus = async (id) => {
    const res = await axiosSecureFetch.patch(`classes/${id}`, {
      status: "Approved",
    });

    if (res) {
      handleRefetch();
    }
  };

  const handleDeny = async (e) => {
    e.preventDefault();

    const denyMessage = e.target?.deny?.value;

    const res = await axiosSecureFetch.patch(`classes/${info?._id}`, {
      status: "Denied",
      feedback: `${denyMessage}`,
    });

    if (res) {
      handleRefetch();
      e.target?.reset();
    }
  };

  return (
    <div className="grid grid-cols-max-10 items-center gap-[1.6rem] border-b-[1px] p-[1.6rem] text-center bg-colorGreyLight3">
      <div>{index + 1}</div>
      <img
        src={info?.classImage}
        alt={info?.className}
        className="w-[12rem] mx-auto rounded-[3px]"
      />
      <div>{info?.className}</div>
      <div>{info?.instructorName}</div>
      <div>{info?.instructorEmail}</div>
      <div>{info?.availableSeats}</div>
      <div>{info?.price}$</div>
      <div
        className={`font-bold ${
          info?.status === "Approved"
            ? "text-colorPrimary"
            : "text-colorTertiary"
        }`}
      >
        {info?.status}
      </div>
      <button
        disabled={info?.status === "Approved" || info?.status === "Denied"}
        onClick={() => handleStatus(info?._id)}
        className={`${
          info?.status === "Approved" || info?.status === "Denied"
            ? "disabled"
            : "btn btn-outline btn-accent text-textBody normal-case h-auto"
        } `}
      >
        Approve
      </button>
      <form onSubmit={handleDeny}>
        <textarea
          name="deny"
          id=""
          cols="16"
          maxLength="300"
          rows="5"
          placeholder="Please send reasonable feedback why this class has been denied (within 300 characters)"
          className="p-[1.2rem] outline-none border-[1px] rounded-[0.8rem]"
          required
        ></textarea>
        <button
          disabled={info?.status === "Denied" || info?.status === "Approved"}
          type="submit"
          className={`${
            info?.status === "Denied" || info?.status === "Approved"
              ? "disabled"
              : "btn btn-outline text-colorTertiary text-textBody normal-case h-auto"
          } `}
        >
          Deny
        </button>
      </form>
    </div>
  );
};

export default ManageClassesCard;
