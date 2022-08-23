import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import React from 'react';
import Home from './page_components/Home';
import Cuisine from './page_components/Cuisine';
import SearchResults from './page_components/SearchResults';
import AdvancedSearchResults from './page_components/AdvancedSearchResults';
import Recipe from './page_components/Recipe';
import UserRecipes from './page_components/UserRecipes';
import UserMealPlan from './page_components/UserMealPlan';
import UserRecipe from './page_components/UserRecipe';


const Pages = ({handleDeleteRecipe, handleFormSubmit, searchFilter, recipes}) => {
  const location = useLocation();
  // useLocation() is required to make animatePresence works (as we are working with react-router)
  // For this, we need to imbed Routes with a key and a location (see below)
  return (
    // <AnimatePresence> wraps all routes in pages to detect change to initiate animations on route enter/exit
  <AnimatePresence >
    <Routes Location={location} key={location.pathname}>
      {/* HOME PAGE */}
      <Route 
        path='/' 
        element={<Home/>}
      />
      {/* CUISINE CATEGORY TYPE */}
      <Route 
        path='/cuisine/:type' 
        element={<Cuisine/>}
      />
      {/* STANDARD SEARCH RESULTS */}
      <Route 
        path='/searched/:search' 
        element={<SearchResults handleFormSubmit={handleFormSubmit}/>}
      />
      {/* FILTERED SEARCH RESULTS */}
      <Route 
        path='/searched/filter/:filterSearch' 
        element={<AdvancedSearchResults 
          searchFilter={searchFilter}/>}
      />
      {/* STANDARD RECIPE SHOW PAGE */}
      <Route 
        path='/recipe/:name' 
        element={<Recipe 
          handleFormSubmit={handleFormSubmit}/>}
      />
      {/* USERS RECIPES LIST */}
      <Route 
        path='/user/recipes' 
        element={<UserRecipes 
          handleDeleteRecipe={handleDeleteRecipe} 
          recipes={recipes}/>}
      />
      {/* SHOW PAGE FOR USERS RECIPES */}
      <Route 
        path='/user/recipes/:recipeID' 
        element={<UserRecipe 
          handleDeleteRecipe={handleDeleteRecipe} 
          recipes={recipes}/>}
      />
      {/* USERS MEAL PLAN PAGE */}
      <Route 
        path='/user/mealplan' 
        element={<UserMealPlan/>}
      />
    </Routes>
  </AnimatePresence>
  )
}

export default Pages