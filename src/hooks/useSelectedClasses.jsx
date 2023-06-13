import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosFetch from "./useAxiosFetch";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const { loading, axiosSecureFetch } = useAxiosFetch();

  const { refetch, data } = useQuery({
    queryKey: ["selectedClasses", user],

    queryFn: async () => {
      const res = await axiosSecureFetch(
        `selectedClasses?email=${user?.email}`
      );
      if (!res) throw new Error(res.message);
      return res;
    },
  });

  return { loading, refetch, data };
};

export default useSelectedClasses;
