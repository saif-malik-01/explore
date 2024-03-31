import React, { useState, useEffect, useMemo, useCallback } from "react";

import { getModels } from "../api/models";
import ModelCard from "../components/ModelCard";
import { getFavoriteModels } from "../utils/favoriteModel";

const Home = () => {
  const [models, setModels] = useState([]);
  const [favoriteModelsId, setFavModelsId] = useState([]);

  useEffect(() => {
    getModels().then((data) => setModels(data));
  }, [favoriteModelsId]);

  useEffect(() => {
    const favModelsId = getFavoriteModels();
    setFavModelsId(favModelsId);
  }, []);

  const onFavoriteClick = useCallback((id) => {
    setFavModelsId((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((favId) => favId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  }, []);

  const categories = useMemo(() => {
    return [...new Set(models.map((model) => model.category))];
  }, [models]);

  const filteredModels = useMemo(() => {
    return models.reduce((acc, model) => {
      acc[model.category] = models.filter((m) => m.category === model.category);
      return acc;
    }, {});
  }, [models]);

  return (
    <div className="bg-gray-50 h-full">
      <div className="px-6 py-4">
        <h1 className="text-4xl font-bold mb-1 mt-4 text-gray-700">
          All Models
        </h1>
        <span className="text-md text-gray-600">
          Explore AI Models by their category.
        </span>

        <div className="container flex-col gap-6 mt-10">
          {categories.map((category) => (
            <section key={category} className="mb-8">
              <h2 className="text-2xl text-gray-700 font-semibold mb-4">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredModels[category].map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    favorite={favoriteModelsId.includes(model.id)}
                    onFavoriteClick={onFavoriteClick}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home;
