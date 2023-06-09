import InstructorCard from "../../UI/InstructorCard";
import SectionTitle from "../../UI/SectionTitle";

const PopularInstructors = () => {
  return (
    <section className="my-[9rem]">
      <div className="container">
        <SectionTitle>Popular Instructors</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
