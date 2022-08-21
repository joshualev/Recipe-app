const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: { type: String, required: true },
    imageURL: { type: String, required: true, default: 'https://placedog.net/500'},
    ingredients: Array,
    instructions: String,
    decscription: String,
    cuisine: String,
    cost: Number,
    calories: Number,
    protein: Number,
    carbohydrates: Number,
    fat: Number,
})

const Recipes = mongoose.model("Recipes", recipeSchema)

module.exports = Recipes