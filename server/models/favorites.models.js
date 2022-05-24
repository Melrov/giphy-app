const query = require("../config/mysql.config");

/**
 *
 * @param {*} gif object that has gif_id, url, title, uid
 * @returns sends a result back
 */
async function addFavorite(gif) {
  try {
    const { insertId } = await query("INSERT INTO favorites SET ?", [gif]);
    return { success: true, data: insertId, error: null };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    };
  }
}

/**
 *
 * @param {int} id id of the favorite you want to remove
 * @returns sends a result back
 */
async function removeFavorite(id) {
  try {
    await query(`DELETE FROM favorites WHERE favorites.id = ?`, [id]);
    return { success: true, data: null, error: null };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    };
  }
}

/**
 *
 * @param {*} userId user id of the user you want to query
 * @returns sends a result back
 */
async function getByUserId(userId) {
  try {
    const data = await query("SELECT * FROM favorites WHERE favorites.uid = ?", userId);
    return { success: true, data: data, error: null };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: "Something went wrong, please try again later.",
    };
  }
}

module.exports = { addFavorite, removeFavorite, getByUserId };
