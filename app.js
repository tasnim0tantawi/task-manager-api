const express = require('express');
const connectDB = require('./db/connection');
const dotenv = require('dotenv');
dotenv.config();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('./controllers/tasks');
const app = express();
const port = 3000;

app.use(express.json());
const tasksRouter = require('./routes/tasks');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/tasks', tasksRouter);


start();