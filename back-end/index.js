require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')
// const cors = require('cors')

const recipesController = require('./controllers/Recipes');
const mealPlanController = require('./controllers/MealPlan')
const userController = require('./controllers/Users');

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBStore = mongoDBSession(session)
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: 'sessions'
})

// app.use(cors({
//   origin: '*'
// }));

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
// app.use(express.static(__dirname + "/client/build"))


app.use('/', recipesController)
app.use('/meals', mealPlanController)
app.use('/user', userController)
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/client/build/index.html")
// })


mongoose.connect(dbURL,() => {
  console.log('connected to MongoDB')
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})