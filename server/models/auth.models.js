const query = require("../config/mysql.config");
const bcrypt = require("bcrypt");

/**
 *
 * @param {*} res result of the query
 * @param {*} username username
 * @param {*} password password
 * @returns sends a result back
 */
async function login(res, username, password) {
  console.log(username, password);
  try {
    const [data] = await query(
      "SELECT * FROM user WHERE user.username = ?",
      username
    );
    if (data) {
      if (await bcrypt.compare(password, data.password)) {
        return res.send({
          success: true,
          data: { username: data.username, id: data.id },
          error: null,
        });
      }
      return res.send({
        success: false,
        data: null,
        error: "Invalid username or password",
      });
    }
    return res.send({
      success: false,
      data: null,
      error: "Invalid username or password",
    });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    });
  }
}

/**
 *
 * @param {*} res result of the query
 * @param {*} username username
 * @param {*} password password
 * @returns sends a result back
 */
async function signup(res, username, password) {
  try {
    const [db_user] = await query(
      "SELECT * FROM user WHERE user.username = ?",
      username
    );
    if (db_user) {
      return res.send({
        success: false,
        data: null,
        error: "Username is already in use",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const { insertId } = await query(
      "INSERT INTO user (username, password) VALUE (?, ?)",
      [username, hash]
    );
    return res.send({ success: true, data: insertId, error: null });
  } catch (err) {
    console.log(err);
    return res.send({
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { login, signup };
