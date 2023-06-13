import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";
import useAuth from "./useAuth";

const useFetch = (url) => {
  const { axiosFetch } = useAxiosFetch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const res = await axiosFetch.get(url);
      if (res) {
        setData(res?.data);
        setLoading(false);
      }
    })();
  }, [user]);

  return { loading, data };
};

export default useFetch;
