const guestUtil = require('../Utils/guests');
// const middlewares = require('../Utils/middlewares');

const allGuests = async (req, res) => {
    let results = await guestUtil.getAllGuests();
    if (res)
        return res.json({ results });
    else {
        return results;
    }
};

const allExpected = async (req, res) => {
    let results = await guestUtil.getAllExpectedGuests();
    if (res)
        return res.json({ results });
    else {
        return results;
    }
};

const addGuest = async (req, res) => {
    if ((await guestUtil.getGuest()).length > 0)
        return res.json({ success: true });

    let success = await guestUtil.addGuest(req.body);
    return res.json({ success });
};

const deleteGuest = async (req, res) => {
    let success = await guestUtil.deleteTask(req.body.guestId);
    return res.json({ success });
};

module.exports = {
    // emailExtract middleware
    ...[
        allGuests,
        allExpected,
        addGuest,
        deleteGuest,
    ].reduce((prev, curr) => {
        //prev[curr.name] = middlewares.emailExtract(curr);
        prev[curr.name] = curr;
        return prev;
    }, {}),
};