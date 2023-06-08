const Card = () => {
  return (
    <>
      <div className="card w-full glass text-textBody">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body px-0">
          <h3 className="card-title text-textH3 py-3 px-[1.6rem]">Life hack</h3>
          <div className="flex gap-5 px-[1.6rem]">
            <img src="ahfoh" alt="a" />
            <span>By Abhijit</span>
          </div>
          <p className="px-[1.6rem]">How to park your car at your garage?</p>
          <div className="card-actions border-t-[.2rem] border-colorGreyLight3 border-solid px-[1.6rem] mt-6">
            <div className="flex justify-between w-full mt-6 py-[1rem] text-center text-textH6">
              <p className="font-bold">500$</p>
              <p>Available Seats: 50</p>
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

export default Card;
