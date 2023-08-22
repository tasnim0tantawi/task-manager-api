const express = require('express');
const {getAllTasks, createTask, getTask, deleteTask, updateTask} = require("../controllers/tasks");
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

router.route('/').post((req, res) => {
    res.send('task created!');
});

module.exports = router;