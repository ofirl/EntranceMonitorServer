const dbUtil = require('./db');

const getAllTasks = async (email) => {
    return await dbUtil.executeQuery(`SELECT id, name, "group", active, color, active_timer, start from tasks_details where email='${email}'`)
}

const getTaskByName = async (email, name) => {
    return await dbUtil.executeQuery(`SELECT id, name, "group", active, color, active_timer, start from tasks_details where email='${email}' and name='${name}'`)
}

const getTaskById = async (email, id) => {
    return await dbUtil.executeQuery(`SELECT id, name, "group", active, color, active_timer, start from tasks_details where email='${email}' and id='${id}'`)
}

const getTaskByGroup = async (email, group) => {
    return await dbUtil.executeQuery(`SELECT id, name, "group", active, color, active_timer, start from tasks_details where email='${email}' and "group"=${group}`)
}

const createTask = async (email, name, group, color) => {
    await dbUtil.executeQuery(`INSERT INTO tasks(
        email, name${group ? ', "group"' : ''}${color ? ', color' : ''})
        VALUES ('${email}', '${name}'${group ? `, ${group}` : ''}${color ? `, '${color}'` : ''})`);
    let taskDbRow = await getTaskByName(email, name);
    let success = taskDbRow.length == 1;
    return { success };
};

const getTotalTasksDuration = async (email) => {
    return await dbUtil.executeQuery(`select * from task_duration where email='${email}'`);
};

const getTodayTasksDuration = async (email) => {
    return await dbUtil.executeQuery(`select * from task_duration_today where email='${email}'`);
};

const startTaskRecording = async (email, task) => {
    await dbUtil.executeQuery(`INSERT INTO task_records(email, task) VALUES ('${email}', ${task})`);
    let taskDbRow = await getTaskById(email, task);
    let success = taskDbRow.length == 1 && taskDbRow[0]['active_timer'];
    return { success };
};

const stopTaskRecording = async (email, task, endTime) => {
    await dbUtil.executeQuery(`UPDATE task_records SET "end"='${endTime}' WHERE email='${email}' and task=${task} and "end" is null`);
    let taskDbRow = await getTaskById(email, task);
    let success = taskDbRow.length == 1 && !taskDbRow[0]['active_timer'];
    return { success };
};

const deleteTask = async (email, task) => {
    await dbUtil.executeQuery(`DELETE FROM tasks WHERE id=${task}`);
    let taskDbRow = await getTaskById(email, task);
    let success = taskDbRow.length == 0;
    return { success };
};

const updateTask = async ({ email, task, name, color, group, active }) => {
    await dbUtil.executeQuery(`UPDATE tasks
        SET ${name ? `name='${name}'` : ''} ${color ? `color='${color}'` : ''} ${group ? `group=${group}` : ''} ${active != null ? `active=${active}` : ''}
        WHERE id=${task}`);
    let taskDbRow = await getTaskById(email, task);
    let success = taskDbRow.length == 0;
    return { success };
};

const archiveTask = async (email, task, active) => {
    return await updateTask({ email, task, active });
};

module.exports = {
    getAllTasks,
    getTaskById,
    getTaskByName,
    getTaskByGroup,
    createTask,
    getTotalTasksDuration,
    getTodayTasksDuration,
    startTaskRecording,
    stopTaskRecording,
    deleteTask,
    updateTask,
    archiveTask
}