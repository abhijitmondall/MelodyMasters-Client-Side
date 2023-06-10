import { useEffect, useState } from "react";
import useAxiosFetch from "./useAxiosFetch";

const useFetch = (url) => {
  const { axiosFetch } = useAxiosFetch();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axiosFetch.get(url);
      setData(res.data);
    })();
  }, []);

  return { data };
};

export default useFetch;
