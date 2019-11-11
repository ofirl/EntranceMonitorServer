const dbUtil = require('./db');

const getGuest = async (guestId) => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name from guests where guest_id=${guestId}`);
};

const getAllGuests = async () => {
    return await dbUtil.executeQuery(`SELECT id, guest_id, guest_name from guests`);
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
    addGuest,
    deleteGuest,
}