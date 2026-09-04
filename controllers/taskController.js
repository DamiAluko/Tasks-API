const Task = require('../models/taskModel')

//GET all tasks
exports.getAllTasks = async(req, res)=>{
  const tasks = await Task.find()
  res.json(tasks)
}

//GET task by id
exports.getTaskById = async(req, res)=>{
  const task = await Task.findById(req.params.id)
  res.status(200).json(task)
}

//POST a new task
exports.createTask = async(req,res)=> {
  const newTask = await Task.create({
    title: req.body.title,
    content: req.body.content
  })
  res.status(201).json(newTask)
}

//PUT - update a task
exports.updateTask = async(req,res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, 
    {title: req.body.title, content:req.body.content, done: req.body.done},
    {returnDocument: 'after'}
  )
  res.status(200).json(updatedTask)
}

exports.deleteTask = async(req,res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id)
  res.status(200).json(deletedTask)
}