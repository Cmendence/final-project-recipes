import React from "react";
import emptyStar from "../images/starEMPTY.svg"
import filledStar from "../images/starFILLED.svg"

export default function RecipeCard(props) {
  let starIcon = props.isFavorited
    ? filledStar
    : emptyStar;

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
        <p>- {ingredient}</p>
      ))}
      <button className="btn--deleteRecipe" onClick={props.deleteRecipe}>
        Delete Recipe
      </button>
    </div>
  );
}
