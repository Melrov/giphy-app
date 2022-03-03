function validateInfo(req, res, next) {
  if (req.body.username.length > 20 || req.body.username.length < 4) {
    return res.send({
      success: false,
      data: null,
      error: "Username must be between 4 and 20 characters",
    });
  }
  if (req.body.password.length > 20 || req.body.password.length < 4) {
    return res.send({
      success: false,
      data: null,
      error: "Password must be between 4 and 20 characters",
    });
  }
  next();
}

module.exports = validateInfo;
