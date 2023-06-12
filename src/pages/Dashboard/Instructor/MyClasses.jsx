import ClassCard from "../../../UI/ClassCard";
import SectionTitle from "../../../UI/SectionTitle";
import Spinner from "../../../UI/Spinner";
import useAuth from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";

const MyClasses = () => {
  const { user } = useAuth();
  const { data, loading } = useFetch(
    `classes?status=Approved&instructorEmail=${user?.email}`
  );

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
      <div className="grid grid-cols-2 gap-[3.2rem]">
        {loading ? (
          <Spinner />
        ) : (
          classes?.map((classInfo) => (
            <ClassCard
              key={classInfo._id}
              classInfo={classInfo}
              // selected={selected}
            />
          ))
        )}
      </div>

      {classes?.length === 0 && (
        <h2 className="text-textH2 text-center text-colorPrimary font-bold">
          No Approved Classes Yet!
        </h2>
      )}
    </section>
  );
};

export default MyClasses;
