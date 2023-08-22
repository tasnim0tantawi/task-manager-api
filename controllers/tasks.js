const getAllTasks = (req, res) => {
    res.send('all tasks!');

}

const createTask = (req, res) => {
    res.send('task created!');
}

const getTask = (req, res) => {
    res.send(`task ${req.params.id}!`);
}

const updateTask = (req, res) => {
    res.send(`task ${req.params.id} updated!`);
}

const deleteTask = (req, res) => {
    res.send(`task ${req.params.id} deleted!`);
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask};
