const groupUtil = require('../Utils/groups');
const middlewares = require('../Utils/middlewares');

const allGroups = async (email, req, res) => {
    let groups = await groupUtil.getAllGroups(email);
    return res.json({ groups });
}

const createGroup = async (email, req, res) => {
    let group = await groupUtil.createGroup(email, req.body.name, req.body.color);
    return res.json(group);
}

module.exports = {
    // emailExtract middleware
    ...[
        allGroups,
        createGroup,
    ].reduce((prev, curr) => {
        prev[curr.name] = middlewares.emailExtract(curr);
        return prev;
    }, {}),
}