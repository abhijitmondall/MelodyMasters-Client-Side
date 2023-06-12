import ClassCard from "../../../UI/ClassCard";
import SectionTitle from "../../../UI/SectionTitle";
import Spinner from "../../../UI/Spinner";
import useAuth from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";

const MyClasses = () => {
  const { user } = useAuth();
  const { data, loading } = useFetch(`classes?instructorEmail=${user?.email}`);

  const { classes } = data;
  return (
    <section className="w-full p-[5rem]">
      <div className="mt-[3rem] w-full">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          My Approved Classes
        </SectionTitle>
      </div>
      <div className="flex flex-col gap-[3rem]">
        <div className="grid grid-cols items-center justify-items-center  border-b-[1px] p-[1.6rem] bg-colorGreyLight3">
          <div className="">#</div>
          <div>Class Img</div>
          <div>Class Name</div>
          <div>Price</div>
          <div>Action</div>
          <div>Action</div>
        </div>

        <div className="grid grid-cols-2 gap-[3rem] items-center justify-items-center ">
          {classes?.map((info) => (
            <ClassCard
              key={info._id}
              classInfo={info}
              options={{ update: true }}
            >
              Update
            </ClassCard>
          ))}
        </div>

        {classes?.length === 0 && (
          <h2 className="text-textH2 text-center text-colorPrimary font-bold">
            No Approved Classes Yet!
          </h2>
        )}
      </div>
    </section>
  );
};

export default MyClasses;
