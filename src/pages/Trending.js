// pages/TrendingModels.js
import React, { useState, useEffect } from 'react';
import { getModels } from '../api/models';

const Trending = () => {
  const [trendingModels, setTrendingModels] = useState([]);

  useEffect(() => {
    getModels().then(models => {
      const sortedModels = models.sort((a, b) => b.visitors - a.visitors);
      setTrendingModels(sortedModels);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Trending Models</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingModels.map(model => (
          <div key={model.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{model.name}</h2>
            <p className="text-gray-600 mt-2">{model.description}</p>
            <p className="text-gray-600 mt-2">Visitors: {model.visitors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
