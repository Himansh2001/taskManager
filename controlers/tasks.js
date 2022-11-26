const tasks = require("../models/tasks");
const Task = require("../models/tasks");
const getAllTasks = async (req, res) => {
  try{
    const task=await Task.find({})
    res.status(200).json({task})
  }
  catch(error){
    res.status(500).json({msg:error})
  }
};
const createTasks = async (req, res) => {
  try{
          const task = await Task.create(req.body);
          res.status(201).json({task}); 
    }
  catch(error){
    res.status(500).json({msg:error}) ;
  }
};
const getTask = async (req, res) => {
    try{
       const {id:taskID}=req.params.id
       const task = await Task.findOne({_id:taskID})
      
       if(!task){
        return res.status(404).json({msg:`no task with id  :${taskID}`})
       }
       else
       res.status(200).json({task});
    }
    catch(error){
                 res.status(500).json({msg:error})
    }
};
const updateTask = async (req, res) => {
  try{
    const taskID= req.params.id ;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
      new:true ,
      runValidators:true ,
    })
    if(!task){
      res.status(404).json({msg:`No task with id: ${taskID}`})
    }
    else res.status(200).json(task) ;
  }
  catch(error){
       res.status(404).json({msg:error}) ;
  }
};
const deleteTask = async (req, res) => {
  try{
        const taskID=req.params.id ;
        const task= await Task.findOneAndDelete({_id:taskID})
        if(!task){
          res.status(404).json({msg:`No task with id ${taskID}`})
           }
        else res.status(200).json({task:null , status:'success'}) ;
     }
  catch(error){
       res.status(500).json({msg:error}) ;
  }
};
module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
