const express = require('express')
const mongoose = require('mongoose')

const recipesController = require('./controllers/Recipes');

const app = express()

const dbURL = 'mongodb://localhost:27017/fresh-app'
const PORT = 4000



app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', recipesController)

mongoose.connect(dbURL,() => {
  console.log('connected to MongoDB')
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})