const express = require('express')
const bcrypt = require('bcrypt')

const User = require ('../models/Users')

const userRouter = express.Router()

// REGISTER
userRouter.post('/register', async (req,res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync()
  )

  try {
    const user = await User.create(req.body)
    req.session.currentUser = user
    res.status(200).json({
      msg: "You have registered successfully",
      authorised: true,
      user: {
        id: user._id,
        username: user.username
      }
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      msg: "Username already exists"
    })
  }
})

// LOGIN
userRouter.post('/login', async (req,res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username }).exec()

  if (!user) {
    return res.status(400).json({
      msg: "Username or password is incorrect"
    })
  }

  const passwordIsCorrect = bcrypt.compareSync(password, user.password)

  if (!passwordIsCorrect){
    return res.status(400).json({
      msg: "Username or password is incorrect"
    })
  } else {
    req.session.currentUser = user
    res.status(200).json({
      msg: 'Succussful login',
      authorised: true
    })
  }
})

// LOGOUT
userRouter.post('/logout', async (req,res) => {
  req.session.destroy(() => {
    res.status(200).json({
      msg: "User logged out",
      authorised: false
    })
  })
})

module.exports = userRouter