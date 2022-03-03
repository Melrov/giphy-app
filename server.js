require("dotenv").config();
const express = require("express");

const authRoute = require("./server/routes/auth.routes");
const favoritesRoute = require("./server/routes/favorites.routes");

const app = express();
const SERVER_PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + "/build"))


app.use("/api/favorites", favoritesRoute);
app.use("/api/auth", authRoute);

app.get("*", (req, res) => {
  //return res.send({ success: false });
  return res.sendFile("/build/index.html", {root: __dirname + "/"})
});
app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}!`);
});
