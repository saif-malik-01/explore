import React, { useCallback, useEffect, useState } from "react";
import { LuEye, LuHeart } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import PropTypes from "prop-types";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { getModelResponse } from "../api/models";
import { getFavoriteModels, toggleFavoriteModel } from "../utils/favoriteModel";


const ModelDetail = ({ model }) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!model) return;
    const list = getFavoriteModels();
    setFavorite(list.includes(model.id));
  }, [model]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const output = await getModelResponse(model.id, inputText);
      setOutputText(output.content);
      setInputText("");
      setLoading(false);
    },
    [model, inputText]
  );

  const addFavorite = useCallback(
    (e) => {
      e?.preventDefault();
      e?.stopPropagation();
      toggleFavoriteModel(model.id);
      setFavorite((p) => !p);
    },
    [model, favorite]
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 text-gray-700">Model Details</h2>
      <div className="flex justify-between mt-4">
        <div className="bg-white border rounded-md p-6 w-[48%]">
          <img
            src={model?.icon || "https://picsum.photos/200"}
            className="w-[40px] rounded-md"
          />
          <h3 className="text-2xl font-bold text-gray-800 my-2">
            {model.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{model.description}</p>
          {!!model?.useCases?.length && (
            <p className="mb-2 text-lg font-semibold text-gray-900">
              Use Cases:
            </p>
          )}
          {!!model?.useCases?.length && (
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside mb-8">
              {model.useCases.map((txt) => {
                return <li>{txt}</li>;
              })}
            </ul>
          )}
          <span className="text-sm flex items-center text-gray-800 gap-1 mb-4">
            <LuEye size={18} />
            <p className="-mt-1 font-semibold">{model.visitors}</p>
            <span
              className="ml-2 p-2 rounded-md hover:bg-gray-100 pointer-cursor"
              onClick={addFavorite}
            >
              <LuHeart size={18} color={favorite ? "red" : "gray"} />
            </span>
          </span>
        </div>
        <div className="bg-white border rounded-md p-6 w-[48%] h-fit">
          <p className="text-2xl font-bold text-gray-800 mb-2">
            {model.provider}
          </p>
          <ul className="max-w-md space-y-2 text-gray-500 list-disc list-inside mb-8">
            <li>
              License:
              <span className="text-gray-800 font-semibold ml-2">
                {model.license}
              </span>
            </li>
            {model.latestUpdate && (
              <li>
                Lastest Update:
                <span className="text-gray-800 font-semibold ml-2">
                  {model.latestUpdate}
                </span>
              </li>
            )}
            <li>
              Framework:
              <span className="text-gray-800 font-semibold ml-2">
                {model.framework}
              </span>
            </li>
            <li>
              Category:
              <span className="text-gray-800 font-semibold ml-2">
                {model.category}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 text-gray-700">Example</h2>
      <div className="bg-white border mt-4 rounded-md p-6 w-full">
        <p className="text-md font-semibold text-gray-700 mb-4">Python</p>
        <SyntaxHighlighter language="python" style={docco}>
          {model.snippet}
        </SyntaxHighlighter>
      </div>
      {model.sandbox && (
        <h2 className="text-2xl font-bold mt-8 text-gray-700">Sandbox</h2>
      )}
      {model.sandbox && (
        <form
          className="bg-white border mt-4 rounded-md p-6 w-full"
          onSubmit={handleSubmit}
        >
          <label htmlFor="input" class="text-md font-semibold text-gray-700">
            Input
          </label>
          <textarea
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            id="input"
            class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
            placeholder="Name of india president?"
            required
          />
          <button
            type="submit"
            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {(loading || outputText) && (
            <span
              dangerouslySetInnerHTML={{
                __html: `<p class="mt-4 p-6 bg-gray-50 rounded-md w-1/2">${
                  loading ? "Loading.." : outputText
                }</p>`,
              }}
            />
          )}
        </form>
      )}
    </div>
  );
};

ModelDetail.propTypes = {
  model: PropTypes.object.isRequired,
};

export default ModelDetail;
