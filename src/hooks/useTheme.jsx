import { useState } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const setDarkMode = () => {
    document.querySelector("[data-theme]").setAttribute("data-theme", "dark");
    document.querySelector("body").classList.add("white");
    document.querySelectorAll(".card").forEach((n) => n.classList.add("bg"));
  };

  const setLightMode = () => {
    document.querySelector("[data-theme]").setAttribute("data-theme", "light");
    document.querySelector("body").classList.remove("white");
    document.querySelectorAll(".card").forEach((n) => n.classList.remove("bg"));
  };

  const handleTheme = () => {
    if (isDark) {
      setDarkMode();
    } else {
      setLightMode();
    }
    setIsDark(!isDark);
  };
  return { handleTheme };
};

export default useTheme;
