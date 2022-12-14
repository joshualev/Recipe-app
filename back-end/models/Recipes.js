const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    imageURL: { type: String, required: true, default: 'https://placedog.net/500'},
    ingredients: Array,
    instructions: Array,
    description: String,
    cuisine: Array,
    cost: Number,
    likes: Number,
    cookTime: Number,
    calories: String,
    protein: String,
    carbohydrates: String,
    fats: String
})

const Recipes = mongoose.model("Recipes", recipeSchema)

module.exports = Recipes