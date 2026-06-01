export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export const isFavorite = (vendorId) => {
  const favorites = getFavorites();
  return favorites.includes(vendorId);
};

export const toggleFavorite = (vendorId) => {
  const favorites = getFavorites();

  const updated = favorites.includes(vendorId)
    ? favorites.filter((id) => id !== vendorId)
    : [...favorites, vendorId];

  localStorage.setItem("favorites", JSON.stringify(updated));

  return updated;
};
