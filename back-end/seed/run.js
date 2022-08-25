const mongoose = require('mongoose')

const Recipes = require('../models/Recipes')
const User = require('../models/Users')
const dummyData = require('./data.json')

const dbURL = 'mongodb://localhost:27017/fresh-app'


mongoose.connect(dbURL, async () => {
  console.log('connected to MongoDB')

  console.log('Resetting recipe collection')
  await Recipes.collection.drop()
  await User.collection.drop()
  console.log('Recipe collection dropped')

  console.log('Inserting seed data')
  const insertedRecipes = await Recipes.insertMany(dummyData)
  console.log('dummy data inserted')
  console.log(insertedRecipes)

  mongoose.connection.close()
})