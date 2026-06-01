export const getLanguage = () => {
  return localStorage.getItem("language") || "es";
};

export const setLanguage = (language) => {
  localStorage.setItem("language", language);
};
