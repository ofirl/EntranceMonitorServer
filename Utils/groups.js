const dbUtil = require('./db');

const getAllGroups = async (email) => {
    return await dbUtil.executeQuery(`SELECT id, name, color, tasks from groups_details where email='${email}'`)
}

const getGroupByName = async (email, name) => {
    return await dbUtil.executeQuery(`SELECT id, name, color, tasks from groups_details where email='${email}' and name='${name}'`)
}

const getGroupById = async (email, id) => {
    return await dbUtil.executeQuery(`SELECT id, name, color, tasks from groups_details where email='${email}' and id='${id}'`)
}

const createGroup = async (email, name, color) => {
    await dbUtil.executeQuery(`INSERT INTO groups(
        email, name${color ? ', color' : null})
        VALUES ('${email}', '${name}'${color ? `,'${color}'` : null})`);
    let taskDbRow = await getGroupByName(email, name);
    let success = taskDbRow.length == 1;
    return { success };
};

module.exports = {
    getAllGroups,
    getGroupById,
    createGroup,
}