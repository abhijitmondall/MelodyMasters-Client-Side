import useSelectedClasses from "../../../hooks/useSelectedClasses";
import SelectedClassCard from "./SelectedClassCard";

const SelectedClasses = () => {
  const { data, refetch } = useSelectedClasses();
  const selectedClasses = data?.data.selectedClasses;
  console.log(selectedClasses);
  return (
    <div className="w-full p-[1.6rem]">
      <div className="flex flex-col gap-[3.2rem]">
        {selectedClasses?.map((info) => (
          <SelectedClassCard key={info._id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default SelectedClasses;
