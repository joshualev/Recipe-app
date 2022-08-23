import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [recipes, setRecipes] = useState(null)
  const [searchFilter, setSearchFilter] = useState([])

  const navigate = useNavigate()

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
    setRecipes([
      ...recipes,
      theNewRecipe
    ])
    navigate("/user/recipes")
    console.log(theNewRecipe)
  }
}

const handleDeleteRecipe = async (recipeToDelete) => {
    const response = await fetch(`http://localhost:4000/user/${recipeToDelete._id}`, {
    method: 'DELETE',
    headers : {
      'Content-Type': 'application/json'
    }
  })
      console.log(response)
      console.log(recipeToDelete)
      setRecipes(recipes.filter((recipe) => recipe._id !== recipeToDelete._id))
      navigate("/")
}


  useEffect(() => {
   getRecipes() 
  },[recipes])


  return (
      <Container> 
        <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
        {recipes &&
        <Pages handleDeleteRecipe={handleDeleteRecipe} handleFormSubmit={handleFormSubmit} recipes={recipes} setRecipes={setRecipes} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        }
      </Container>
  );
}

export default App;
