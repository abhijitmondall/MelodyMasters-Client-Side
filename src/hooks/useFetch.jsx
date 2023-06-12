import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";

const useFetch = (url) => {
  const { axiosFetch } = useAxiosFetch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axiosFetch.get(url);
      if (res) {
        setLoading(false);
        setData(res.data);
      }
    })();
  }, []);

  return { loading, data };
};

export default useFetch;
