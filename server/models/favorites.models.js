const query = require("../config/mysql.config");

/**
 *
 * @param {*} res result of the query
 * @param {*} gif object that has gif_id, url, title, uid
 * @returns sends a result back
 */
async function addFavorite(res, gif) {
  try {
    const { insertId } = await query("INSERT INTO favorites SET ?", [gif]);
    return res.send({ success: true, data: insertId, error: null });
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
 * @param {res} res result of the query
 * @param {int} id id of the favorite you want to remove
 * @returns sends a result back
 */
async function removeFavorite(res, id) {
  try {
    await query(`DELETE FROM favorites WHERE favorites.id = ?`, [id]);
    return res.send({ success: true, data: null, error: null });
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
 * @param {res} res result of the query
 * @param {*} userId user id of the user you want to query
 * @returns sends a result back
 */
async function getByUserId(res, userId) {
  try {
    const data = await query(
      "SELECT * FROM favorites WHERE favorites.uid = ?",
      userId
    );
    return res.send({ success: true, data: data, error: null });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { addFavorite, removeFavorite, getByUserId };
