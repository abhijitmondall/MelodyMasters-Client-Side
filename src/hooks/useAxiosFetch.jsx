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
    axiosSecureFetch.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 ||
            error.response.status === 403 ||
            error.response.status === 400)
        ) {
          logout();
          navigate("/login");
        }
        console.log(error);
        return Promise.reject(error);
      }
    );

    axiosSecureFetch.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 ||
            error.response.status === 403 ||
            error.response.status === 400)
        ) {
          logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return { axiosFetch, axiosSecureFetch };
};

export default useAxiosFetch;
