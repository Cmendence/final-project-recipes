import React from "react";
import RecipeCard from "./RecipeCard";

export default function Recipes(props) {

  return (
   <div className="container--recipes">
    <section>
      {props.recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          deleteRecipe={() => props.deleteRecipe(recipe.id)}
          toggleFavorite={() => props.toggleFavorite(recipe.id)}
          {...recipe}
        />
      ))}
    </section>
    </div>
  );
}
