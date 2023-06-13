import ClassCard from "../../UI/ClassCard";
import SectionTitle from "../../UI/SectionTitle";
import Spinner from "../../UI/Spinner";
import useFetch from "../../hooks/useFetch";
import useSelectedClasses from "../../hooks/useSelectedClasses";

const Classes = () => {
  const { data, loading } = useFetch("classes?sort=-enrolledStudents");
  const { classes } = data;

  const { data: selectedClasses = [], refetch } = useSelectedClasses();

  return (
    <section className="my-[9rem]">
      <div className="container">
        <SectionTitle>Explore All Classes</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          {loading ? (
            <Spinner />
          ) : (
            classes?.map((classInfo) => (
              <ClassCard
                key={classInfo._id}
                classInfo={classInfo}
                selectedClasses={selectedClasses?.data?.selectedClasses}
                refetch={refetch}
              >
                Select
              </ClassCard>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Classes;
