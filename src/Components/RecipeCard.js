import React from 'react'


export default function RecipeCard(props) {
  console.log(props)

   return(
      <div className='recipeCard'>
         
            <h3>{props.recipeName}</h3>
            <h3>{props.addedBy}</h3>
            <h3>Directions:</h3>
            <span>{props.directions}</span>
            <h3>Ingredients:</h3>
            {props.ingredients.map(ingredient =>(
              <p>{ingredient}</p>
            ))}
      </div>
   )
}