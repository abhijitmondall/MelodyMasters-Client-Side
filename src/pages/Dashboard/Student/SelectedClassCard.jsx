import useAxiosFetch from "../../../hooks/useAxiosFetch";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const SelectedClassCard = ({ info, index }) => {
  const { axiosSecureFetch } = useAxiosFetch();
  const { refetch } = useSelectedClasses();

  const handleDeleteOperation = async (id) => {
    const res = await axiosSecureFetch.delete(`selectedClasses/${id}`);
    if (res) {
      refetch();
    }
    console.log(id);
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
      <button className="btn btn-outline btn-accent text-textBody normal-case h-auto">
        Pay Now
      </button>
    </div>
  );
};

export default SelectedClassCard;
