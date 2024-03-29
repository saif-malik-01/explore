// pages/Home.js
import React, { useState, useEffect } from 'react';
import ModelForm from '../components/ModelForm';
import { getModels } from '../api/models';

const Home = () => {
  const [models, setModels] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    getModels().then(data => setModels(data));
  }, []);

  const categories = [...new Set(models.map(model => model.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">AI Models</h1>
      {showForm ? (
        <>
          <ModelForm />
          <button
            onClick={toggleForm}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          onClick={toggleForm}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Model
        </button>
      )}
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.filter(model => model.category === category).map(model => (
              <div key={model.id} className="border p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="text-gray-600 mt-2">{model.description}</p>
                <p className="text-gray-600 mt-2">Visitors: {model.visitors}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
