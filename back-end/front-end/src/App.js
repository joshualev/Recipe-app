import React, { useState, useEffect } from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Navbar from './components/Navbar/Navbar'
import AdvancedSearch from './components/Navbar/AdvancedSearch';

function App() {
  const [recipes, setRecipes] = useState(null)
  const [savedRecipe, setSavedRecipe] = useState(null)

  const [searchFilter, setSearchFilter] = useState([])



  // const getRecipes = async() => {
  //   const url = "http://localhost:4000/"
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setRecipes(data)
  //   console.log(recipes)
  // }

  async function getRecipes() {
    try {
      const response = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        accept: 'application.json',
      },
    });
    if (response.ok) {
      const result = await response.json();
      setRecipes(result);
    }
    if (!response.ok) {
      throw new Error(`Error! status: $(response.status})`);
    }
  } catch (err) {
    console.log(err)
  }
}


const handleFormSubmit = async (newRecipe) => { 
  // const recipeObject = {
  //   title: newRecipe.title,
  //   imageURL: newRecipe.image,
  //   ingredients: newRecipe.extendedIngredients,
  //   instructions: newRecipe.analyzedInstructions[0].steps,
  //   description: newRecipe.summary,
  //   cuisine: newRecipe.cuisines,
  // }
  const response = await fetch('http://localhost:4000/user/recipes', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id : newRecipe.id,
      title : newRecipe.title,
      imageURL: newRecipe.image,
      ingredients: newRecipe.extendedIngredients,
      instructions: newRecipe.analyzedInstructions[0].steps,
      description: newRecipe.summary,
      cuisine: newRecipe.cuisines,
    })
  })
  if (response.ok) {
    const theNewRecipe = await response.json()
    console.log(theNewRecipe)
  }
}

  useEffect(() => {
   getRecipes() 
  },[])


  return (
      <Container> 
        {console.log(savedRecipe)}
        <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
        {recipes &&
        <Pages handleFormSubmit={handleFormSubmit} recipes={recipes} setRecipes={setRecipes} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        }
      </Container>
  );
}

export default App;
