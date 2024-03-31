import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getModelByQuery } from "../api/models";
import ModelCard from "../components/ModelCard";


const Search = () => {
  const [searchedModels, setSearchedModels] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) {
      setSearchedModels([]);
      return;
    }

    getModelByQuery(query).then((models) => {
      setSearchedModels(models || []);
    });
  }, [query]);

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="px-6 py-4">
        <h1 className="text-4xl font-bold mb-1 mt-4 text-gray-700">
          Search Models
        </h1>
        <span className="text-md text-gray-600">
          Popular models by visitors.
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {searchedModels.map((model) => (
            <ModelCard model={model} key={model.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
