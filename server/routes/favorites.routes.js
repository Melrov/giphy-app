const express = require("express");
const {
  addFavorite,
  removeFavorite,
  getByUserId,
} = require("../models/favorites.models");
const router = express.Router();

router.get("/:user_id", (req, res, next) => {
  getByUserId(res, req.params.user_id);
});

router.put("/upload", (req, res) => {
  const { gif_id, title, url, uid } = req.body;
  if (!gif_id || !title || !url || !uid) {
    return res.send({
      success: false,
      data: null,
      error: "Invalid format please provide a gif_id, title, url, and uid",
    });
  }
  addFavorite(res, { gif_id, title, url, uid });
});

router.delete("/remove/:id", (req, res) => {
  removeFavorite(res, req.params.id);
});

module.exports = router;
