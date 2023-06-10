import ClassCard from "../../UI/ClassCard";
import SectionTitle from "../../UI/SectionTitle";

import useFetch from "../../hooks/useFetch";

const PopularClasses = () => {
  const { data } = useFetch("classes?limit=6&sort=-enrolledStudents");
  const { classes } = data;

  return (
    <section>
      <div className="container">
        <SectionTitle>Popular Classes</SectionTitle>
        <div className="grid grid-cols-3 gap-[3.2rem]">
          {classes?.map((classInfo) => (
            <ClassCard key={classInfo._id} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
