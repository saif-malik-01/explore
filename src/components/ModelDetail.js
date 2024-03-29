// components/ModelDetail.js
import React, { useState } from 'react';

const ModelDetail = ({ model }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual model inference logic
    setOutputText(`Output for "${inputText}"`);
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{model.name}</h2>
      <p className="text-gray-600 mt-2">{model.description}</p>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold">Details:</h3>
        <ul className="mt-2 list-disc list-inside">
          <li><strong>Category:</strong> {model.category}</li>
          <li><strong>Use Cases:</strong> {model.useCases.join(', ')}</li>
          <li><strong>Framework:</strong> {model.framework}</li>
          <li><strong>License:</strong> {model.license}</li>
          <li><strong>Provider:</strong> {model.provider}</li>
          <li><strong>Snippet:</strong> {model.snippet}</li>
          <li><strong>Latest Update:</strong> {model.latestUpdate}</li>
          <li><strong>Popularity:</strong> {model.popularity}</li>
        </ul>
      </div>
      <div className="mt-4 border-t border-gray-300 pt-4">
        <h3 className="text-lg font-semibold">Try it out:</h3>
        <form onSubmit={handleSubmit} className="mt-2">
          <label htmlFor="inputText" className="block text-sm font-medium text-gray-700">Input Text:</label>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button type="submit" className="mt-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
        <div className="mt-4">
          <strong>Output:</strong> {outputText}
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
