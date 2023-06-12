import ClassCard from "../../UI/ClassCard";
import SectionTitle from "../../UI/SectionTitle";
import Spinner from "../../UI/Spinner";
import useFetch from "../../hooks/useFetch";

const Classes = () => {
  const { data, loading } = useFetch("classes?sort=-enrolledStudents");
  const { classes } = data;

  return (
    <section className="my-[9rem]">
      <div className="container">
        <SectionTitle>Explore All Classes</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          {loading ? (
            <Spinner />
          ) : (
            classes?.map((classInfo) => (
              <ClassCard key={classInfo._id} classInfo={classInfo}>
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
