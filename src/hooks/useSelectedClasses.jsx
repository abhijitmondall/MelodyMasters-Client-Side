import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosFetch from "./useAxiosFetch";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const { axiosSecureFetch } = useAxiosFetch();

  const { refetch, data } = useQuery({
    queryKey: ["selectedClasses", user?.email],

    queryFn: async () => {
      const res = await axiosSecureFetch(
        `selectedClasses?email=${user?.email}`
      );

      return res;
    },
  });
  return { refetch, data };
};

export default useSelectedClasses;
