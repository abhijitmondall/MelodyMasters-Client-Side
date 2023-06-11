const SelectedClassCard = ({ info }) => {
  return (
    <div className="grid grid-cols-5 items-center justify-items-center  border-b-[1px] p-[1.6rem]">
      <div>
        <img src={info.classImage} alt="" className="w-[50%]" />
      </div>
      <div>{info.className}</div>
      <div>{info.price}$</div>
      <button>Delete</button>
      <button>pay now</button>
    </div>
  );
};

export default SelectedClassCard;
