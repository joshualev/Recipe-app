require('dotenv').config()
// ----------------------------------------------------------- //
// Require dependencies
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')
// ----------------------------------------------------------- //
// Require controllers
const recipesController = require('./controllers/Recipes');
const mealPlanController = require('./controllers/MealPlan')
const userController = require('./controllers/Users');
// ----------------------------------------------------------- //
// Session
const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBStore = mongoDBSession(session)
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: 'sessions'
})
// ----------------------------------------------------------- //
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// ----------------------------------------------------------- //
// Use the production version of app (located in build folder in client)
app.use(express.static(__dirname + '/client/build'))
// ----------------------------------------------------------- //
// Default routes
app.use('/', recipesController)
app.use('/meals', mealPlanController)
app.use('/user', userController)
// ----------------------------------------------------------- //
// Catch all requests
app.get("*", (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
  // Entry point for react app ->
  // Send client/build/index.html
})
// ----------------------------------------------------------- //
// Connect to database
mongoose.connect(dbURL,() => {
  console.log('connected to MongoDB')
})

// Connect to port
app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})
// ----------------------------------------------------------- //