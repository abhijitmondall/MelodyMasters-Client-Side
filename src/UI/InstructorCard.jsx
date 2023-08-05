import { useNavigate } from "react-router-dom/dist";

const InstructorCard = ({ instructorInfo }) => {
  const { photo, name, email, students, classes } = instructorInfo;
  const navigate = useNavigate();

  const handleSeeBtn = function () {
    navigate("/classes");
  };

  return (
    <>
      <div className="card w-full glass bg-[#18B1A2] text-textBody p-[3.2rem]">
        <figure>
          <img
            src={photo}
            alt={name}
            className="w-[15rem] h-[15rem] object-cover rounded-[50%]"
          />
        </figure>

        <div className="text-center">
          <h3 className="text-textH3 text-colorGreyLight1 font-bold pt-3 px-[1.6rem] ">
            {name}
          </h3>
          <p className="px-[1.6rem] text-colorGreyLight3">{email}</p>
        </div>

        <div className="card-body px-0">
          <div className="card-actions border-t-[.2rem] border-colorGreyLight3 border-solid px-[1.6rem] mt-6">
            <div className="flex justify-between w-full mt-6 py-[1rem] text-center text-textH6 text-colorGreyLight1">
              <p>Students: {students}</p>
              <p>Classes: {classes}</p>
            </div>

            <button
              onClick={handleSeeBtn}
              className="btn py-[1.4rem] bg-colorPrimary text-white hover:text-black w-full h-auto text-textBody"
            >
              See Classes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
