import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import RecipeForm from "./Components/RecipeForm";
import Recipes from "./Components/Recipes";
import NavBar from "./Components/NavBar";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";

function App() {
  const [recipes, setRecipes] = React.useState([]);

  // const [recipeData, setRecipeData] = React.useState({
  //       recipeName:"",
  //       addedBy:"",
  //       directions:"",
  //       ingredients:[]
  //       isFavorite: false

  // })
  const API_URL =
    "https://646bb1287d3c1cae4ce42918.mockapi.io/recipes/RecipeBook";

  let starIcon = recipes.isFavorited
    ? "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
    : "https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png";

  const getRecipes = async () => {
    try {
      const resp = await fetch(API_URL); // response from the api
      const data = await resp.json(); //extracting json from response object

      setRecipes(data);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const recipe = await response.json();
      const recipeName = recipe.recipeName;

      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      getRecipes();
      alert(`${recipeName} has been deleted!`);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  function updateRecipes(newRecipe) {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  }

  // function toggleFavorite(id) {
  //    setRecipes(prevData =>
  //        prevData.map(recipe =>
  //          recipe.id === id ? {...recipe, isFavorited: !recipe.isFavorited } : recipe
  //          )
  //          )

  // }

  function toggleFavorite(id) {
    // Retrieve the recipe with the specified ID
    const recipeToUpdate = recipes.find((recipe) => recipe.id === id);

    // Toggle the isFavorited property
    const updatedRecipe = {
      ...recipeToUpdate,
      isFavorited: !recipeToUpdate.isFavorited,
    };

    // Prepare the Fetch options
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    };

    // Send the PUT request to update the API
    fetch(`${API_URL}/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          // Update the state or perform any other actions upon successful update
          setRecipes((prevData) =>
            prevData.map((recipe) =>
              recipe.id === id ? updatedRecipe : recipe
            )
          );
        } else {
          // Handle the error if the update request fails
          console.error(
            "Failed to update the API:",
            response.status,
            response.statusText
          );
        }
      })
      .catch((error) => {
        console.error("Failed to update the API:", error);
      });
  }

  return (
    <div className="content-container">
      <div className="content">
        <div className="navBar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                deleteRecipe={deleteRecipe}
                toggleFavorite={toggleFavorite}
                starIcon={starIcon}
              />
            }
          />
          <Route
            path="/addRecipe"
            element={<RecipeForm updateRecipes={updateRecipes} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                recipes={recipes}
                toggleFavorite={toggleFavorite}
                starIcon={starIcon}
              />
            }
          />
        </Routes>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
