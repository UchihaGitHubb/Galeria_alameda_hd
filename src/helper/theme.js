// src/helper/theme.js

export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
};

export const initializeTheme = () => {
  const theme = getTheme();

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
};

export const toggleTheme = () => {
  const currentTheme = getTheme();

  const newTheme = currentTheme === "light" ? "dark" : "light";

  setTheme(newTheme);

  return newTheme;
};
