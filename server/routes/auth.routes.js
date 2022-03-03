const express = require("express");
const { login, signup } = require("../models/auth.models");
const validateInfo = require("../middleware/validateInfo.middleware");
const router = express.Router();

router.use(validateInfo);

router.post("/login", (req, res) => {
  login(res, req.body.username, req.body.password);
});

router.put("/signup", (req, res) => {
  signup(res, req.body.username, req.body.password);
});

module.exports = router;
