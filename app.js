const express = require('express');
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('./controllers/tasks');
const app = express();
const port = 3000;

app.use(express.json());
const tasksRouter = require('./routes/tasks');


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/tasks', tasksRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
