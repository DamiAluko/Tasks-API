
const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json())

let tasks = []
let nextId = 1

//GET all tasks
app.get("/", (req, res)=>{
  res.send("Hello!")
})

app.get("/tasks", (req, res)=>{
  res.json(tasks)
})

//POST a new task
app.post("/tasks", (req,res)=>{
  const newTask = {
    id: nextId++,
    title: req.body.title,
    done: false
  }
  tasks.push(newTask)
  res.status(200).json(tasks)
})


connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error: ', error)
  }
}

connectDB()



// app.listen(3000, ()=>{
//   console.log("Server running on Port 3000")
// })