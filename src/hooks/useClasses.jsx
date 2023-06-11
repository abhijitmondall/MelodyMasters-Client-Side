import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import useAuth from "./useAuth";

const useQueryFetch = (url) => {
  const { user } = useAuth();

  const { refetch, data } = useQuery({
    queryKey: ["selectedClasses", user?.email, url],

    queryFn: async () => {
      const { data: info } = await useFetch(url);

      return info;
    },
  });
  return { refetch, data };
};

export default useQueryFetch;
