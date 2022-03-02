require('dotenv').config()
const express = require('express')

const authRoute = require("./server/routes/auth.routes")
const favoritesRoute = require("./server/routes/favorites.routes")

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json)
app.use(express.static(__dirname + "/build"))

app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", {root: __dirname + "/"})
})

app.get("/api/favorites", favoritesRoute)
app.get("/api/auth", authRoute)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${port}!`);
})