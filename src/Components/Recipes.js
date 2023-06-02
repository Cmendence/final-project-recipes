import React from 'react'
import RecipeCard from './RecipeCard'


export default function Recipes(props) {


console.log(props)
console.log(props.recipes)

   //          addedBy:"",
//          recipeName:"",
//          directions:"",
//          ingredients:[]
//          isFavorite: false


   return(
      <section>
        {props.recipes.map(recipe =>( 
         <RecipeCard
         key={recipe.id}
         {...recipe}
         />)
)}
      </section>
   )
}