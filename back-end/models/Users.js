const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: {
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
  }
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users