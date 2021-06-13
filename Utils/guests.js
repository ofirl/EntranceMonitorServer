const dbUtil = require('./db');

const isExpectedGuest = async (guestId) => {
    try {
        return (await dbUtil.executeQuery(`SELECT guest_id from expected where guest_id='${guestId}'`)).length == 1;
    }
    catch (e) {
        return false;
    }
};

const getGuest = async (guestId) => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name, arrival_time, rank, unit from guestsdetails where guest_id='${guestId}'`);
};

const getAllGuests = async () => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name, arrival_time, rank, unit from guestsdetails`);
};

const getAllExpectedGuests = async () => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name, rank, unit from expected`);
};

const addGuest = async ({ guestId, guestName = "", arrival_time = new Date() }) => {
    await dbUtil.executeQuery(`INSERT INTO guests(
        guest_id, guest_name${arrival_time ? ', arrival_time' : ''})
        VALUES (${guestId}, '${guestName}'${arrival_time ? `,'${arrival_time}'` : ''})`);
    let taskDbRow = await getGuest(guestId);
    let success = taskDbRow && taskDbRow.length == 1;
    return { success };
};

const deleteGuest = async (guestId) => {
    await dbUtil.executeQuery(`DELETE FROM guests WHERE guest_id=${guestId}`);
    let taskDbRow = await getGuest(guestId);
    let success = taskDbRow.length == 0;
    return { success };
};

module.exports = {
    isExpectedGuest,
    getGuest,
    getAllGuests,
    getAllExpectedGuests,
    addGuest,
    deleteGuest,
}