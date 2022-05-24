const { addFavorite, removeFavorite, getByUserId } = require("../models/favorites.models");
const Joi = require("joi");

exports.configureFavoritesRoutes = (server) => {
  return server.route([
    {
      method: "GET",
      path: "/api/favorites/{user_id}",
      handler: function (request, h) {
        return getByUserId(request.params.user_id);
      },
    },
    {
      method: "PUT",
      path: "/api/favorites/upload",
      handler: function (request, h) {
        const { gif_id, title, url, uid } = request.payload;
        return addFavorite({ gif_id, title, url, uid });
      },
      options: {
        validate: {
          payload: Joi.object({
            gif_id: Joi.string().required(),
            title: Joi.string().required(),
            url: Joi.string().required(),
            uid: Joi.string().required(),
          }),
        },
      },
    },
    {
      method: "DELETE",
      path: "/api/favorites/remove/{id}",
      handler: function (request, h) {
        return removeFavorite(request.params.id);
      },
    },
  ]);
};
