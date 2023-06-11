import useAuth from "./useAuth";
import useFetch from "./useFetch";

const useUsers = () => {
  const { user } = useAuth();
  const { data } = useFetch(`users?email=${user.email}`);
  const users = data?.data?.users[0];

  return users;
};

export default useUsers;
