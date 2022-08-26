import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Container} from './globalStyles'
import Pages from './pages/Pages.jsx'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [authorised, setAuthorised] = useState(null)
  const [recipes, setRecipes] = useState(null)
  const [mealPlan, setMealPlan] = useState(null)
  const [searchFilter, setSearchFilter] = useState([])

  const navigate = useNavigate()

  const handleAuthorise = (authed) => {
    console.log('authed', authed)
    console.log('authorised is', authorised)
    setAuthorised(authed)
    console.log('authorised is', authorised)
    if (authed) {
      console.log('You have successfully logged in')
      navigate('/')
    } else {
      console.log('Incorrect username details')
    }
  }

  const handleLogout = () => {
    setAuthorised(false)
    navigate('/')
  }

  const checkLoginStatus = async () => {
    const res = await fetch('http://localhost:4000/user/isauthorised')
    const data = await res.json()
    setAuthorised(data.authorised)
    console.log(authorised)
    console.log('DATA', data)
  }

  // get meal plan data
  async function getMealPlan() {
    try {
      const response = await fetch('http://localhost:4000/meals/', {
        method: 'GET',
        headers: {
          accept: 'application.json'
        },
      });
      if (response.ok) {
        const result = await response.json();
        setMealPlan(result);
        console.log('meal plan', mealPlan);
      }
      if (!response.ok) {
        throw new Error(`Error! status: $(response.status})`);
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Get recipe data
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

useEffect(() => {
  getRecipes() 
  getMealPlan() 
  checkLoginStatus()
  // on each refresh, checks if used is authorised
 },[])

// Add new meal item to meal plan list
const handleCreateMealPlanSubmit = async(newMeal) => {
  const response = await fetch('http://localhost:4000/meals/', {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMeal)
  })
  if (response.ok) {
    const newMealPlanResult = await response.json()
    setMealPlan(newMealPlanResult)
    getMealPlan()
    // navigate("/user/mealplan")
  }
}


//  Add recipe item to saved list
const handleFormSubmit = async (newRecipe) => { 
  console.log(newRecipe)
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
      cost: newRecipe.pricePerServing,
      likes: newRecipe.aggregateLikes,
      cookTime: newRecipe.readyInMinutes,
      calories: newRecipe.calories,
      protein: newRecipe.protein,
      carbohydrates: newRecipe.carbs,
      fats: newRecipe.fat
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
    await fetch(`http://localhost:4000/user/${recipeToDelete._id}`, {
    method: 'DELETE',
    headers : {
      'Content-Type': 'application/json'
    },
  })  
      console.log('testing for execution 1 2 3 4')
      setRecipes(recipes.filter((recipe) => recipe._id !== recipeToDelete._id))
      navigate("/user/recipes")
}

const handleShowMealPlan = async (mealPlanID) => {
  console.log(mealPlanID)
}


const handleDeleteMealPlan = async (mealPlanToDelete) => { 
  await fetch(`http://localhost:4000/meals/${mealPlanToDelete._id}`, {
  method: 'DELETE',
  headers : {
    'Content-Type': 'application/json'
  },
})  
    console.log('testing for execution 1 2 3 4')
    setMealPlan(mealPlan.filter((meal) => meal._id !== mealPlanToDelete._id))
    getMealPlan()
    navigate("/user/mealplan")
}



const handleUpdateMealPlan = async(mealPlanID, generatedPlan) => {
  console.log(mealPlanID)
  await fetch(`http://localhost:4000/meals/${mealPlanID}`, {
  method: 'PUT', 
  headers : {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(generatedPlan)
})
    console.log('updating now')
    setMealPlan(mealPlan)
    navigate("/user/mealplan")
}

  return (
      <Container> 
        <Navbar 
          searchFilter={searchFilter} 
          setSearchFilter={setSearchFilter}
          handleLogout={handleLogout}
          authorised={authorised} 
        />
        {recipes &&
        <Pages 
          handleDeleteRecipe={handleDeleteRecipe} 
          handleFormSubmit={handleFormSubmit} 
          recipes={recipes} 
          handleAuthorise={handleAuthorise} 
          authorised={authorised}
          handleCreateMealPlanSubmit={handleCreateMealPlanSubmit}
          mealPlan={mealPlan}
          handleUpdateMealPlan={handleUpdateMealPlan}
          handleShowMealPlan={handleShowMealPlan}
          handleDeleteMealPlan={handleDeleteMealPlan}
       />
        }
      </Container>
  );
}

export default App;
