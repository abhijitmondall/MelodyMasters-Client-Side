import ClassCard from "../../UI/ClassCard";
import SectionTitle from "../../UI/SectionTitle";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../UI/Spinner";
import useSelectedClasses from "../../hooks/useSelectedClasses";

const PopularClasses = () => {
  const { data: selectedClasses = [], refetch } = useSelectedClasses();

  const { data, loading } = useFetch(
    "classes?limit=6&sort=-enrolledStudents&status=Approved"
  );

  const { classes } = data;

  return (
    <section>
      <div className="container">
        <SectionTitle>Popular Classes</SectionTitle>
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

export default PopularClasses;
