import React from 'react'
import FavoritesCard from './FavoritesCard'

export default function Favorites(props) {

   let favoritesArray = props.recipes.filter(recipe => recipe.isFavorited === true)
   return(
      <div>
         <h1 className='favorites--title'>Favorite Recipes:</h1>
      <section>
      {favoritesArray.map(recipe =>( 
       <FavoritesCard
       key={recipe.id}
       toggleFavorite={() =>props.toggleFavorite(recipe.id)}
       {...recipe}
       />
         )
)}
    </section>
    </div>
   )
}