import React, {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import RecipeForm from './Components/RecipeForm';
import Recipes from './Components/Recipes';
import NavBar from './Components/NavBar';
import Favorites from './Components/Favorites';
import Footer from './Components/Footer';



function App() {

   const [recipes, setRecipes] = React.useState([])

   // const [recipeData, setRecipeData] = React.useState({
   //       recipeName:"",
   //       addedBy:"",
   //       directions:"",
   //       ingredients:[]
   //       isFavorite: false


   // })
   const API_URL = "https://646bb1287d3c1cae4ce42918.mockapi.io/recipes/RecipeBook"



// function getRecipes() {
//       fetch(API_URL)
//       .then(resp => resp.json())
//       .then(data =>setRecipes(data))
// }

const getRecipes = async () => {
   try { 
     const resp = await fetch(API_URL); // response from the api
     const data = await resp.json(); //extracting json from response object

     setRecipes(data)
     console.log(recipes)
   } catch (error) { 
     console.error("Something went wrong", error);
   }
 };


useEffect(() => {
   getRecipes()
}, [] )

// function postNewRecipe(recipe) {
//    try {
//       const resp = fetch(API_URL, {
//          method: 'POST',
//          headers: {
//             'Content-Type': 'application/json'
//          },
//          body: JSON.stringify({
            
//          }),
//       })
//       console.log(resp)
//       let data = resp.json()
//       console.log(data);
//    } catch (error){
//       console.log(error);
   
//    }
// }

// const displayRecipes = recipes.map(recipe => {
//    return (
//       <RecipeCard
//       key={recipe.id}
//       {...recipe}
//       />
//    )
// })

  return (
   <>
   <div className='content-container'>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/recipes" element={<Recipes recipes={recipes} banana={'Banana'}/>}/>
         <Route path="/addRecipe" element={<RecipeForm />} />
         <Route path="/favorites" element={<Favorites />} />
      </Routes>
   </div>
      <Footer />
   </>
  )

}

export default App;
