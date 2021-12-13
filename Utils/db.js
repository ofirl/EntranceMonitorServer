const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false,
});

const executeQuery = async (query) => {
  try {
    const client = await pool.connect();
    const result = await client.query(query);
    const results = result ? result.rows : null;
    client.release();
    return results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const logAction = ({ type, description, info }) => {
  let query = `INSERT INTO public.logs(
        type, description, info)
        VALUES ('${type}', '${description}', '${info}')`;
  return executeQuery(query);
};

const verifyLogin = async ({ user, password }) => {
  let logonEntry = await executeQuery(
    `SELECT * FROM logon WHERE email='${user}' and password='${password}'`
  );
  let verified = logonEntry && logonEntry.length == 1;

  let loginLog = {
    type: "login",
    description: (verified ? "Succesful" : "Failed") + ` login for ${user}`,
    info: `User: ${user}`,
  };
  logAction(loginLog);

  return verified;
};

module.exports = {
  executeQuery,
  verifyLogin,
  logAction,
};
