const InstructorCard = () => {
  return (
    <>
      <div className="card w-full glass text-textBody">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>

        <div className="text-center">
          <h3 className="text-textH3 pt-3 px-[1.6rem]">Abhijit Mondal</h3>
          <p className="px-[1.6rem]">abhijeetmondal5@gmail.com</p>
        </div>

        <div className="card-body px-0">
          <div className="card-actions border-t-[.2rem] border-colorGreyLight3 border-solid px-[1.6rem] mt-6">
            <div className="flex justify-between w-full mt-6 py-[1rem] text-center text-textH6">
              <p className="font-bold">Students: 1000</p>
              <p>Classes: 50</p>
            </div>
            <button className="btn py-[1.4rem] bg-colorPrimary text-white w-full h-auto text-textBody">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
