import SectionTitle from "../../../UI/SectionTitle";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import SelectedClassCard from "./SelectedClassCard";

const SelectedClasses = () => {
  const { data, refetch } = useSelectedClasses();
  const selectedClasses = data?.data.selectedClasses;
  console.log(selectedClasses);
  return (
    <div className="w-full p-[1.6rem]">
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          My Selected Classes
        </SectionTitle>
      </div>
      <div className="flex flex-col gap-[3.2rem]">
        <div className="grid grid-cols items-center justify-items-center  border-b-[1px] p-[1.6rem] bg-colorGreyLight3">
          <div className="">#</div>
          <div>Class Img</div>
          <div>Class Name</div>
          <div>Price</div>
          <div>Action</div>
          <div>Action</div>
        </div>
        {selectedClasses?.length !== 0 ? (
          selectedClasses?.map((info, index) => (
            <SelectedClassCard key={info._id} info={info} index={index} />
          ))
        ) : (
          <h2 className="text-textH2 text-center text-colorPrimary font-bold">
            You did't selected any classes yet!
          </h2>
        )}
      </div>
    </div>
  );
};

export default SelectedClasses;
