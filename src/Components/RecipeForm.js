import React from 'react'


const API_URL = "https://646bb1287d3c1cae4ce42918.mockapi.io/recipes/RecipeBook"


//          addedBy:"",
//          recipeName:"",
//          directions:"",
//          ingredients:[]
//          isFavorite: false

export default function RecipeForm() {

   
   const [recipeData, setRecipeData] = React.useState({
      recipeName:"",
      addedBy:"",
      directions:"",
      ingredients:[],
      isFavorited: false
})

   const [newIngredient, setNewIngredient] = React.useState('')

   function addNewRecipe(e) {
      e.preventDefault()
      const data = recipeData
      try {
         const resp = fetch(API_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
         })
         console.log(resp)
         let respdata = resp.json()
         console.log(respdata);
      } catch (error){
         console.log(error);
      }

   }

   

   
   function handleChange(e) {
      setRecipeData(prevData => {
         return {
            ...prevData,
            [e.target.name]: e.target.value
         }
      })
   }

   function handleAddIngredient(e) {
      e.preventDefault()
      let updatedRecipeData = structuredClone(recipeData)
      updatedRecipeData.ingredients.push(newIngredient)
      setRecipeData(updatedRecipeData)
      setNewIngredient('')

      console.log(updatedRecipeData)

   }


   return(
      <div className='container'>
      <div className='container--form'>
      <h2>Add New Recipe</h2>
      <form >
      <label htmlFor='recipeName'>Recipe Name</label>
      <input 
         id='recipeName'
         type='text' 
         placeholder='Recipe Name'
         name='recipeName'
         value={recipeData.recipeName}
         onChange={handleChange}
         required
         />
      <label htmlFor='addedBy'>Added By</label>
      <input 
         id='addedBy'
         type='text' 
         placeholder='Added By'
         name='addedBy'
         value={recipeData.addedBy}
         onChange={handleChange}
         required
         />
      <label htmlFor='directions'>Directions</label>
      <input 
         id='directions'
         type='textarea' 
         placeholder='Directions'
         name='directions'
         value={recipeData.directions}
         onChange={handleChange}
         required
         />
         <label htmlFor='ingredients'>Ingredient</label>
            <input
            type='text' 
            placeholder='Ingredient'
            name='ingredients'
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            />
         <button className='btn--addIngredient' onClick={(e) => handleAddIngredient(e)}>Add</button>
            <div>
         <button className='btn--recipeForm' onClick={addNewRecipe} >Add Recipe</button>
         </div>
         </form>
      </div>
         <div className='ingredientsList'>
            <h3>Ingredients:</h3>
            {recipeData.ingredients.map(ingredient => {
              return(
              <p key={ingredient}>{ingredient}</p>
            )})}
         </div>
      </div>
   )
}