const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controlers/tasks");

router.route('/').get(getAllTasks).post(createTasks) ;
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) ;


module.exports = router
