const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    imageURL: { type: String, required: true, default: 'https://placedog.net/500'},
    ingredients: Array,
    instructions: Array,
    decscription: String,
    cuisine: Array,
    cost: Number,
    calories: Number,
    protein: Number,
    carbohydrates: Number,
    fat: Number,
})

const Recipes = mongoose.model("Recipes", recipeSchema)

module.exports = Recipes