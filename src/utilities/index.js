export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

export const addToFavorite = (phone) => {
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return console.log("phone already exist");
  favorites.push(phone);
  console.log(phone);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removedFavorite = (id) => {
  const favorites = getFavorites();
  const remainingFavorites = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
};
