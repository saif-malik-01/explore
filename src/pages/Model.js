// pages/Model.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getModelById } from '../api/models';
import ModelDetail from '../components/ModelDetail';

const Model = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    getModelById(id).then(data => setModel(data));
  }, [id]);

  if (!model) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Model Details</h1>
      <ModelDetail model={model} />
    </div>
  );
};

export default Model;
