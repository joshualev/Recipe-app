const express = require('express')

const mealPlanRouter = express.Router()
const MealPlan = require('../models/MealPlan.js')


//GET index route
mealPlanRouter.get('/', async (req,res) => {
  try {
    const recipes = await MealPlan.find({}).exec()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({errorMessage: error.Message})
  }
})

//CREATE Add a new recipe to saved recipes
mealPlanRouter.post('/', async (req,res) => {
  try {
    const addNewRecipe = await MealPlan.create(req.body)
    console.log(addNewRecipe)
    res.status(200).json(addNewRecipe)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message})
    console.log('could not add recipe to list', error.message)
  }
})

//Delete Route
// mealPlanRouter.delete('/', async (req,res) => {
//   try {
//     const mealToRemove = await MealPlan.deleteMany({}).exec()
//     console.log(mealToRemove, 'has been removed')
//     res.status(200).json(mealToRemove)
//   } catch (error) {
//     res.status(500).json({errorMessage: errorMessage})
//   }
//   })


  mealPlanRouter.put('/:mealPlanID', async (req,res) => {
    try {
      const updatedMealPlan = await MealPlan.findByIdAndUpdate(req.params.mealPlanID, req.body, {new: true} ).exec()
      console.log('updated meal plan', updatedMealPlan)
      res.status(200).json(updatedMealPlan)
    } catch (error) {
      res.status(500).json({ errorMessage: error.message })
      console.log('could not update meal plan', error.message)
    }
  })


module.exports = mealPlanRouter