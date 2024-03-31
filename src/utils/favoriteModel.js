export const getFavoriteModels = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
  };
  
  export const addFavoriteModel = (id) => {
    const favorites = getFavoriteModels();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const removeFavoriteModel = (id) => {
    let favorites = getFavoriteModels();
    favorites = favorites.filter((favId) => favId !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  export const toggleFavoriteModel = (id) => {
    const favorites = getFavoriteModels();
    if (favorites.includes(id)) {
      removeFavoriteModel(id);
    } else {
      addFavoriteModel(id);
    }
  };