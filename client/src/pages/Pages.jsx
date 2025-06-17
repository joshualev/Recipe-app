import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import React from 'react';

import Home from './page_components/Home';
import Cuisine from './page_components/Cuisine';
import SearchResults from './page_components/SearchResults';
import AdvancedSearchResults from './page_components/AdvancedSearchResults';
import Recipe from './page_components/Recipe';
import UserRecipes from './page_components/UserRecipes';
import UserMealPlan from './page_components/UserMealPlans';
import UserRecipe from './page_components/UserRecipe';
import Login from '../components/User/Login';
import Register from '../components/User/Register';
import UserMealPlans from './page_components/UserMealPlan'
const Pages = ({apiKey, handleDeleteMealPlan, handleShowMealPlan, handleUpdateMealPlan, mealPlan, handleCreateMealPlanSubmit, handleDeleteRecipe, handleFormSubmit, searchFilter, recipes, handleAuthorise, authorised}) => {
  const location = useLocation();
  // useLocation() is required to make animatePresence works (as we are working with react-router)
  // For this, we need to imbed Routes with a key and a location (see below)
  return (
    // <AnimatePresence> wraps all routes in pages to detect change to initiate animations on route enter/exit
  <AnimatePresence >
    <Routes Location={location} key={location.pathname}>    
      {/* Home page */}
      <Route 
        path='/' 
        element={<Home
          apiKey={apiKey} />}
      />
      {/* Cuisine - category type show page */}
      <Route 
        path='/cuisine/:type' 
        element={<Cuisine
            apiKey={apiKey} />}
      />
      {/* Standard search results */}
      <Route 
        path='/searched/:search' 
        element={<SearchResults 
          apiKey={apiKey} 
          handleFormSubmit={handleFormSubmit}/>}
      />
      {/* Filtered search results */}
      <Route 
        path='/searched/filter/:filterSearch' 
        element={<AdvancedSearchResults 
          searchFilter={searchFilter}
          apiKey={apiKey} />}
      />
      {/* recipe catelogue - standard overview */}
      <Route 
        path='/recipe/:name' 
        element={<Recipe 
          handleFormSubmit={handleFormSubmit}
          apiKey={apiKey} />}
      />
      {/* user recipes overview */}
      <Route 
        path='/user/recipes' 
        element={<UserRecipes 
          handleDeleteRecipe={handleDeleteRecipe} 
          recipes={recipes}
          authorised={authorised}
          apiKey={apiKey} />}
      />
      {/* User recipes show page */}
      <Route 
        path='/user/recipes/:recipeID' 
        element={<UserRecipe 
          handleDeleteRecipe={handleDeleteRecipe} 
          recipes={recipes}
          apiKey={apiKey} />}
      />
      {/* User meals plan overview */}
      <Route 
        path='/user/mealplan' 
        element={ mealPlan && <UserMealPlan
          handleCreateMealPlanSubmit={handleCreateMealPlanSubmit}
          mealPlan={mealPlan}
          authorised={authorised}
          handleUpdateMealPlan={handleUpdateMealPlan}
          handleDeleteMealPlan={handleDeleteMealPlan}
          apiKey={apiKey} 
        />}
      />
      {/* User meal plan show page */}
      <Route 
        path='/user/mealplan/:mealPlanID' 
        element={mealPlan && <UserMealPlans
          handleCreateMealPlanSubmit={handleCreateMealPlanSubmit}
          mealPlan={mealPlan}
          authorised={authorised}
          handleUpdateMealPlan={handleUpdateMealPlan}
          handleShowMealPlan={handleShowMealPlan}
          handleDeleteMealPlan={handleDeleteMealPlan}
          apiKey={apiKey} 
        />}
      />
      {/* User login */}
      <Route 
        path='/login' 
        element={<Login 
          handleAuthorise={handleAuthorise} 
          authorised={authorised}/>}
      />
      {/* User register */}
      <Route 
        path='/register' 
        element={<Register 
          handleAuthorise={handleAuthorise} 
          authorised={authorised}/>}
      />   
    </Routes>
  </AnimatePresence>
  )
}

export default Pages