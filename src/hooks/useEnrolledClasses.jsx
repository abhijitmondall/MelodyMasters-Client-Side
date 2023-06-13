import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";
import useAuth from "./useAuth";

const useEnrolledClasses = () => {
  const { axiosSecureFetch } = useAxiosFetch();
  const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefetch, setIsRefetch] = useState(false);

  const reFetch = () => {
    setIsRefetch(true);
  };

  useEffect(() => {
    (async () => {
      const res = await axiosSecureFetch.get(
        `enrolledUsers?email=${user.email}`
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
  }, [isRefetch]);

  return {
    enrolledClasses,
    loading,
    reFetch,
  };
};

export default useEnrolledClasses;
