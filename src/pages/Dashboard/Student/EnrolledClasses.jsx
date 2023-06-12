import { useEffect, useState } from "react";
import SectionTitle from "../../../UI/SectionTitle";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import useAuth from "../../../hooks/useAuth";
import ClassCard from "../../../UI/ClassCard";
import Spinner from "../../../UI/Spinner";

const EnrolledClasses = () => {
  const { axiosSecureFetch } = useAxiosFetch();
  const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axiosSecureFetch.get(
        `/enrolledUsers?email=${user.email}`
      );
      if (res) {
        const newData = res.data?.data?.enrolledUsers.map(async (el) => {
          const res2 = await axiosSecureFetch.get(`/classes/${el?.classID}`);
          return res2.data.class;
        });
        const classes = await Promise.all(newData);
        setEnrolledClasses(classes);
      }
      setLoading(false);
    })();
  }, []);

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
            <ClassCard key={index} classInfo={info} />
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
