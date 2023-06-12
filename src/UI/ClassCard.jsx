import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ classInfo, children, options }) => {
  const { axiosSecureFetch } = useAxiosFetch();

  const {
    _id,
    classImage,
    className,
    instructorName,
    instructorPhoto,
    price,
    availableSeats,
    enrolledStudents,
    totalSeats,
    status,
    feedback,
  } = classInfo;

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelectedBTN = async (info) => {
    if (options?.update) {
      // TODO: handle Update the instructors class
      console.log("will be update in future");
      return;
    } else if (options?.enrolled) {
      // TODO: handle Enrolled Student class for start learning
      console.log("will be update in future");
    } else {
      if (!user) {
        Swal.fire("You have to log in first to perform this action!");

        return navigate("/login", { replace: true });
      }

      const userEmail = user?.email;
      const selectedClass = { email: userEmail, ...info };

      const { data } = await axiosSecureFetch.post("selectedClasses", {
        ...selectedClass,
      });

      if (data) {
        Swal.fire("You have successfully selected the class!");
      }
    }
  };

  return (
    <>
      <div className="card w-full glass text-textBody">
        <figure>
          <img
            src={classImage}
            alt={className}
            className="w-full h-[25rem] object-cover"
          />
        </figure>
        <div className="card-body px-0">
          <h3 className="card-title text-textH3 p-[1.6rem] text-colorPrimary">
            {className}
          </h3>
          <div className="flex items-center gap-5 px-[1.6rem]">
            <img
              src={instructorPhoto}
              alt={instructorName}
              className="w-[5rem] h-[5rem] rounded-[50%]"
            />
            <span>By {instructorName}</span>
          </div>

          {options?.update && (
            <p className="px-[1.6rem]">
              Feedback: {feedback ? feedback : "No Feedback Yet!"}
            </p>
          )}

          <div className="card-actions border-t-[.2rem] border-colorGreyLight3 border-solid px-[1.6rem] mt-6">
            <div className="flex justify-between w-full mt-6 py-[1rem]  text-textH6 px-[1.6rem] items-center">
              <div>
                <p className="font-bold text-textH4 ">{price}$</p>
                {options?.update && <p>Status: {status}</p>}
              </div>
              <div className="text-center">
                <p>Enrolled: {enrolledStudents}</p>
                <p>Total Seats: {totalSeats}</p>
                <p>Available Seats: {availableSeats}</p>
              </div>
            </div>
            <button
              onClick={() =>
                handleSelectedBTN({
                  classID: _id,
                  classImage,
                  className,
                  price,
                  enrolledStudents,
                })
              }
              // disabled={selected?.some((el) => el._id === _id)}
              className="btn py-[1.4rem] bg-colorPrimary text-white w-full h-auto text-textBody"
            >
              {children}
              {/* {false ? "Selected" : "Select"} */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
