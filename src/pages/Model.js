import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getModelById, increaseVisitorById } from "../api/models";
import ModelDetail from "../components/ModelDetail";

const Model = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || model) return;

    getModelById(id)
      .then((data) => {
        setModel(data);
        setLoading(false);
        increaseVisitorById(id);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id, model]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error: {error.message}</div>;
  }

  if (!model) {
    return <div className="container mx-auto px-4 py-8">Model not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="px-6 py-4">
        <ModelDetail model={model} />
      </div>
    </div>
  );
};

export default Model;
