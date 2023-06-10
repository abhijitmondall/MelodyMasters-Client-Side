import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosFetch = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const axiosSecureFetch = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const useAxiosFetch = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hello from axios secure");

    axiosSecureFetch.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecureFetch.interceptors.response.use(
      (response) => response,

      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecureFetch]);

  return { axiosFetch, axiosSecureFetch };
};

export default useAxiosFetch;
