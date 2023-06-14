import InstructorCard from "../../UI/InstructorCard";
import SectionTitle from "../../UI/SectionTitle";
import useFetch from "../../hooks/useFetch";

const PopularInstructors = () => {
  const { data } = useFetch("users/instructors?limit=6");
  const { instructors } = data;

  return (
    <section className="my-[9rem]">
      <div className="container">
        <SectionTitle>Popular Instructors</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem] mt-[3rem]">
          {instructors?.map((instructor) => (
            <InstructorCard key={instructor._id} instructorInfo={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
