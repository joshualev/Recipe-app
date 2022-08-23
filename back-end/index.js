require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')

const recipesController = require('./controllers/Recipes');
const usersController = require('./controllers/Users');

const app = express()

const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const MongoDBStore = mongoDBSession(session)
const sessionStore = new MongoDBStore({
  uri: dbURL,
  collection: 'sessions'
})

app.use(cors());

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

app.use('/', recipesController)
app.use('/user', usersController)

mongoose.connect(dbURL,() => {
  console.log('connected to MongoDB')
})

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})