const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const taskRoutes = require('./routes/taskRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error: ', error)
  }
}

connectDB()

app.use('/tasks', taskRoutes)

app.listen(3000, () => {
  console.log("Server running on Port 3000")
})