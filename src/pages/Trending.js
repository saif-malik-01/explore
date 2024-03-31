import React, { useState, useEffect, useCallback } from "react";

import { getModels } from "../api/models";
import ModelCard from "../components/ModelCard";
import { getFavoriteModels } from "../utils/favoriteModel";

const Trending = () => {
  const [trendingModels, setTrendingModels] = useState([]);
  const [favoriteModelsId, setFavModelsId] = useState([]);

  useEffect(() => {
    getModels().then((models) => {
      const sortedModels = [...models].sort((a, b) => b.visitors - a.visitors);
      setTrendingModels(sortedModels);
    });
  }, []);

  useEffect(() => {
    const favModelsId = getFavoriteModels();
    setFavModelsId(favModelsId);
  }, []);

  const onFavoriteClick = useCallback(
    (id) => {
      let temp = [...favoriteModelsId];
      if (temp.includes(id)) {
        temp = temp.filter((favId) => favId !== id);
      } else temp.push(id);

      setFavModelsId(temp);
    },
    [favoriteModelsId]
  );

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="px-6 py-4">
        <h1 className="text-4xl font-bold mb-1 mt-4 text-gray-700">
          Trending Models
        </h1>
        <span className="text-md text-gray-600">
          Popular AI Models.
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {trendingModels.map((model) => (
            <ModelCard
              model={model}
              key={model.id}
              favorite={favoriteModelsId.includes(model.id)}
              onFavoriteClick={onFavoriteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
