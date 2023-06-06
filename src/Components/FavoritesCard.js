import React from "react";

export default function FavoritesCard(props) {
  let starIcon = props.isFavorited
    ? "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
    : "https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png";

  return (
    <div className="recipeCard">
      <div className="recipeCard--top">
        <p>-{props.recipeName}-</p>
        <img
          className="favorites--icon"
          src={starIcon}
          alt="star icon"
          onClick={props.toggleFavorite}
        />
      </div>
      <h4>Added By:</h4>
      <span>{props.addedBy}</span>
      <h4>Directions:</h4>

      <span>{props.directions}</span>
      <h4>Ingredients:</h4>
      {props.ingredients.map((ingredient) => (
        <p>{ingredient}</p>
      ))}
    </div>
  );
}
