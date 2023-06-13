import SectionTitle from "../../../UI/SectionTitle";
import ClassCard from "../../../UI/ClassCard";
import Spinner from "../../../UI/Spinner";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const EnrolledClasses = () => {
  const { loading, enrolledClasses } = useEnrolledClasses();

  return (
    <section className="w-full p-[1.6rem]">
      <div className="mt-[3rem]">
        <SectionTitle
          className={{ className: "bg-colorGreyLight2 text-textH5" }}
        >
          My Enrolled Classes
        </SectionTitle>
      </div>
      <div className="w-full grid grid-cols-2 gap-[3.2rem] p-[5rem] justify-items-center">
        {loading ? (
          <Spinner />
        ) : (
          enrolledClasses?.map((info, index) => (
            <ClassCard
              key={index}
              classInfo={info}
              options={{ enrolled: true }}
            >
              Start Learning
            </ClassCard>
          ))
        )}
      </div>

      {enrolledClasses?.length !== 0 || loading ? (
        ""
      ) : (
        <h2 className="text-textH2 text-center text-colorPrimary font-bold">
          You didn't Enroll any classes yet!
        </h2>
      )}
    </section>
  );
};

export default EnrolledClasses;
