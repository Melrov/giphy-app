const query = require("../config/mysql.config");
const bcrypt = require("bcrypt");

async function login(res, username, password) {
  try {
    const [data] = await query(
      "SELECT * FROM user WHERE user.username = ?",
      username
    );
    if(data){
        const hash = await bcrypt.hash(password, 10);
        if(bcrypt.compare(data.password, hash)){
            return res.send({success: true, data: {username: data.username, id: data.id }, error: null})
        }
        return res.send({success: false, data: null, error: "Invalid password"})
    }
    return res.send({success: false, data: null, error: "Invalid username"})
  } catch (err) {
    return res.send({ success: false, data: null, error: "Something went wrong, please try again later." });
  }
}

async function signup(res, username, password){
    try {
        const [db_user] = await query("SELECT * FROM user WHERE user.username = ?", username)
        if(db_user){
            return res.send({success: false, data: null, error: "Username is already in use"})
        }
        const hash = await bcrypt.hash(password, 10);
        const { insertId } = await query("INSERT INTO user (username, password) VALUE (?, ?)", [user.username, hash])
        return res.send({success: true, data: insertId, error: null})
    } catch (err) {
        return res.send({success: false, data: null, error: "Something went wrong, please try again later."})
    }
}

module.exports = { login, signup }