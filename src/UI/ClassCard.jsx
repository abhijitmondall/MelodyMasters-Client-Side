const ClassCard = ({ classInfo }) => {
  const {
    classImage,
    className,
    instructorName,
    instructorPhoto,
    price,
    availableSeats,
    enrolledStudents,
    totalSeats,
  } = classInfo;

  return (
    <>
      <div className="card w-full glass text-textBody">
        <figure>
          <img src={classImage} alt={className} className="w-full" />
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

          <div className="card-actions border-t-[.2rem] border-colorGreyLight3 border-solid px-[1.6rem] mt-6">
            <div className="flex justify-between w-full mt-6 py-[1rem]  text-textH6 px-[1.6rem] items-center">
              <p className="font-bold text-textH4 ">{price}$</p>
              <div className="text-center">
                <p>Enrolled: {enrolledStudents}</p>
                <p>Total Seats: {totalSeats}</p>
                <p>Available Seats: {availableSeats}</p>
              </div>
            </div>
            <button className="btn py-[1.4rem] bg-colorPrimary text-white w-full h-auto text-textBody">
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
