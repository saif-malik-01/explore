import React, { useState, useEffect, useCallback } from "react";

import { getModels } from "../api/models";
import ModelCard from "../components/ModelCard";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getModels()
      .then((models) => {
        const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
        const favModels = models.filter(({ id }) => favoriteIds.includes(id));
        setFavorites(favModels);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleFavClick = useCallback((id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((model) => model.id !== id));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-4 bg-gray-50 h-full">
      <h1 className="text-4xl font-bold mb-1 mt-4 text-gray-700">Favorite Models</h1>
      <span className="text-md text-gray-600">Popular models by visitors.</span>
      {favorites.length === 0 ? (
        <p className="mt-8 text-center">No favorite models yet. Add some from the Explore page!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {favorites.map((model) => (
            <ModelCard model={model} key={model.id} favorite={true} onFavoriteClick={handleFavClick} />
          ))}
        </div>
      )}
    </div>
  );
};


export default Favorite;
