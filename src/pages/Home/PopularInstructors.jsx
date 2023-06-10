import InstructorCard from "../../UI/InstructorCard";
import SectionTitle from "../../UI/SectionTitle";
import useFetch from "../../hooks/useFetch";

const PopularInstructors = () => {
  const { data } = useFetch("users/top-6-instructors");
  const { instructors } = data;

  return (
    <section className="my-[9rem]">
      <div className="container">
        <SectionTitle>Popular Instructors</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          {instructors?.map((instruct) => (
            <InstructorCard key={instruct._id} instructorInfo={instruct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
