import React from "react";
import { Link } from "react-router-dom";
import { LuEye, LuHeart } from "react-icons/lu";
import PropTypes from "prop-types";

import { toggleFavoriteModel } from "../utils/favoriteModel";

const ModelCard = ({ model, favorite, onFavoriteClick = () => {} }) => {
  const addFavorite = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    toggleFavoriteModel(model.id);
    onFavoriteClick(model.id);
  };

  return (
    <Link
      to={`/model/${model.id}`}
      className="relative p-6 pb-14 bg-white border border-gray-50 rounded-md shadow transition-all duration-700 hover:scale-105"
    >
      <img src={model?.icon || "https://picsum.photos/200"} className="w-[40px] rounded-md" />
      <h3 className="my-2 text-xl font-semibold tracking-tight text-gray-900">
        {model.name}
      </h3>
      <p className="mb-3 font-medium text-gray-500">{model.description}</p>
      <span className="absolute bottom-6 text-sm flex items-center text-gray-800 gap-1">
        <LuEye size={18} />
        <p className="font-semibold">{model.visitors}</p>
        <span
          className="ml-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          onClick={addFavorite}
        >
          <LuHeart size={18} color={favorite ? "red" : "gray"} />
        </span>
      </span>
    </Link>
  );
};

ModelCard.propTypes = {
  model: PropTypes.object.isRequired,
  favorite: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func,
};

export default ModelCard;
