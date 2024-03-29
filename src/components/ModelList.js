// components/ModelList.js
import React from "react";
import { Link } from "react-router-dom";

const ModelList = ({ models }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <Link key={model.id} to={`model/${model.id}`} className="border p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">{model.name}</h2>
          <p className="text-gray-600 mt-2">{model.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default ModelList;
