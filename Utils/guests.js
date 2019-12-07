const dbUtil = require('./db');

const getGuest = async (guestId) => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name, arrival_time from guestsdetails where guest_id=${guestId}`);
};

const getAllGuests = async () => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name, arrival_time from guestsdetails`);
};

const getAllExpectedGuests = async () => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name from expected`);
};

const addGuest = async ({ guestId, guestName = "" }) => {
    await dbUtil.executeQuery(`INSERT INTO guests(
        guest_id, guest_name)
        VALUES (${guestId}, '${guestName}')`);
    let taskDbRow = await getGuest(guestId);
    let success = taskDbRow.length == 1;
    return { success };
};

const deleteGuest = async (guestId) => {
    await dbUtil.executeQuery(`DELETE FROM guests WHERE guest_id=${guestId}`);
    let taskDbRow = await getGuest(guestId);
    let success = taskDbRow.length == 0;
    return { success };
};

module.exports = {
    getGuest,
    getAllGuests,
    getAllExpectedGuests,
    addGuest,
    deleteGuest,
}