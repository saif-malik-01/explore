import React, { useState } from "react";

import { addModel } from "../api/models";

const INITIAL_FORM = {
  name: "",
  category: "",
  framework: "",
  license: "",
  provider: "",
  description: "",
  snippet: "",
}

const ModelForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [btn, setBtn] = useState("Submit");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtn("Loading...");
    const status = await addModel(formData);
    if (status) {
      setBtn("Successfully Added!");
      setTimeout(() => {
        setBtn("Submit");
        setFormData(INITIAL_FORM);
      }, 500);
    } else {
      setBtn("Submit");
      setError("Failed to add model. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 h-full p-6">
      <h1 className="text-4xl font-bold mb-1 mt-2 text-gray-700">Add Model</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form
        className="max-w-full mx-auto grid grid-cols-2 gap-4 bg-white p-6 rounded-md mt-6 border"
        onSubmit={handleSubmit}
      >
        {Object.keys(formData).map((name) => {
          return (
            <div className="mb-5" key={name}>
              <label
                htmlFor={name}
                className="capitalize block mb-2 text-sm font-medium text-gray-900"
              >
                {name}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={`Model ${name}`}
                required
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="text-white col-span-2 !w-[100px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {btn}
        </button>
      </form>
    </div>
  );
};


export default ModelForm;
