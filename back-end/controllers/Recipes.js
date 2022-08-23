const express = require('express')

const recipesRouter = express.Router()
const Recipes = require('../models/Recipes')

//GET index route
recipesRouter.get('/', async (req,res) => {
  try {
    const recipes = await Recipes.find({}).exec()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({errorMessage: error.Message})
  }
})

// GET show a recipe
recipesRouter.get('/user/:recipeID', async (req,res) => {
  try {
    const recipe = await Recipes.findById(req.params.recipeID).exec()
    console.log(recipe)
  } catch (error) {
    res.status(500).json({errorMessage: error.Message})
  }
  })


//CREATE Add a new recipe to saved recipes
recipesRouter.post('/user/recipes', async (req,res) => {
  try {
    const addNewRecipe = await Recipes.create(req.body)
    console.log(addNewRecipe)
    res.status(200).json(addNewRecipe)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message})
    console.log('could not add recipe to list', error.message)
  }
})

//Delete Route
recipesRouter.delete('/user/:recipeID', async (req,res) => {
  try {
    const recipeToRemove = await Recipes.findByIdAndDelete(req.params.recipeID).exec()
    console.log(recipeToRemove.title, 'has been removed')
    res.status(200).json(recipeToRemove)
  } catch (error) {
    res.status(500).json({errorMessage: errorMessage})
  }
  })


module.exports = recipesRouter