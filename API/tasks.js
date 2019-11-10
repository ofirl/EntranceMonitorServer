const taskUtil = require('../Utils/tasks');
const middlewares = require('../Utils/middlewares');

const allTasks = async (email, req, res) => {
    let tasks = await taskUtil.getAllTasks(email);
    return res.json({ tasks });
};

const getTotalTasksDuration = async (email, req, res) => {
    let tasks = await taskUtil.getTotalTasksDuration(email);
    return res.json({ tasks });
};

const getTodayTasksDuration = async (email, req, res) => {
    let tasks = await taskUtil.getTodayTasksDuration(email);
    return res.json({ tasks });
};

const getTasksDuration = async (email, req, res) => {
    let totalDuration = await taskUtil.getTotalTasksDuration(email);
    let todayDuration = await taskUtil.getTodayTasksDuration(email);
    return res.json({ total: totalDuration, today: todayDuration });
};

const startTaskRecording = async (email, req, res) => {
    let recording = await taskUtil.startTaskRecording(email, req.body.task);
    return res.json(recording);
};

const stopTaskRecording = async (email, req, res) => {
    let recording = await taskUtil.stopTaskRecording(email, req.body.task, req.body.endTime);
    return res.json(recording);
};

const createTask = async (email, req, res) => {
    let newTask = await taskUtil.createTask(email, req.body.name, req.body.group, req.body.color);
    return res.json(newTask);
};

const deleteTask = async (email, req, res) => {
    let newTask = await taskUtil.deleteTask(email, req.body.task);
    return res.json(newTask);
};

const archiveTask = async (email, req, res) => {
    let newTask = await taskUtil.archiveTask(email, req.body.task, req.body.active);
    return res.json(newTask);
};

module.exports = {
    // emailExtract middleware
    ...[
        allTasks,
        getTotalTasksDuration,
        getTodayTasksDuration,
        getTasksDuration,
        startTaskRecording,
        stopTaskRecording,
        createTask,
        deleteTask,
        archiveTask,
    ].reduce((prev, curr) => {
        prev[curr.name] = middlewares.emailExtract(curr);
        return prev;
    }, {}),
};