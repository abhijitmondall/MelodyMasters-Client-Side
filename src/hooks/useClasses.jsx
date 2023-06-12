import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
  const { user, loading } = useAuth();

  const { refetch, data } = useQuery({
    queryKey: ["classes", user],

    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}classes`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return await res.json();
    },
  });
  return { refetch, data };
};

export default useClasses;
