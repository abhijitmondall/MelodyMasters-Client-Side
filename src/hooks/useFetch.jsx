import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";
import useAuth from "./useAuth";

const useFetch = (url) => {
  const { user } = useAuth();
  const { axiosFetch } = useAxiosFetch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!user) return;
      const res = await axiosFetch.get(url);
      if (res?.data) {
        setLoading(false);
        setData(res?.data);
      }
    })();
  }, [user]);

  return { loading, data };
};

export default useFetch;
