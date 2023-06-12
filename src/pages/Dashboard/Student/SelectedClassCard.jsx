import useAxiosFetch from "../../../hooks/useAxiosFetch";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import usePayment from "../../../hooks/usePayment";
import { Link } from "react-router-dom";

const SelectedClassCard = ({ info, index }) => {
  const { axiosSecureFetch } = useAxiosFetch();
  const { refetch } = useSelectedClasses();
  const { handlePayment } = usePayment();

  const handleDeleteOperation = async (id) => {
    const res = await axiosSecureFetch.delete(`selectedClasses/${id}`);
    if (res) {
      refetch();
    }
  };

  const handlePayOperation = (info) => {
    if (info) {
      handlePayment(info);
    }
  };

  return (
    <div className="grid grid-cols items-center justify-items-center  border-b-[1px] p-[1.6rem]">
      <div className="">{index + 1}</div>
      <div>
        <img
          src={info.classImage}
          alt=""
          className="w-[50%] mx-auto rounded-[3px]"
        />
      </div>
      <div>{info.className}</div>
      <div>{info.price}$</div>
      <button
        onClick={() => handleDeleteOperation(info._id)}
        className="btn btn-outline btn-accent text-textBody normal-case h-auto"
      >
        Delete
      </button>

      <Link to="/dashboard/payment">
        <button
          onClick={() => handlePayOperation({ info })}
          className="btn btn-outline btn-accent text-textBody normal-case h-auto"
        >
          Pay Now
        </button>
      </Link>
    </div>
  );
};

export default SelectedClassCard;
