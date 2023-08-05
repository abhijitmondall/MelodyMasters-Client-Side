import InstructorCard from "../../UI/InstructorCard";
import PageTitle from "../../UI/PageTitle";
import SectionTitle from "../../UI/SectionTitle";
import Spinner from "../../UI/Spinner";
import useFetch from "../../hooks/useFetch";

const Instructors = () => {
  const { data, loading } = useFetch("users/instructors");
  const { instructors } = data;

  return (
    <section className="my-[9rem]">
      <PageTitle>MelodyMasters | Instructors</PageTitle>
      <div className="container">
        <SectionTitle>All Instructors</SectionTitle>
        <div className="grid grid-cols-4 gap-[3.2rem]">
          {loading ? (
            <Spinner />
          ) : (
            instructors?.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructorInfo={instructor}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
