
const express = require('express')
const app = express()

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



app.listen(3000, ()=>{
  console.log("Server running on Port 3000")
})