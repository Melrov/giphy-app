const { login, signup } = require("../models/auth.models");
const Joi = require("joi");

module.exports.configureAuthRoutes = (server) => {
  return server.route([
    {
      method: "POST",
      path: "/api/auth/login",
      handler: function (request, h) {
        return login(request.payload.username, request.payload.password);
      },
      options: {
        validate: {
          payload: Joi.object({
            username: Joi.string().min(4).max(20),
            password: Joi.string().min(4).max(20),
          }),
        },
      },
    },
    {
      method: "PUT",
      path: "/api/auth/signup",
      handler: function (request, h) {
        return signup(request.payload.username, request.payload.password);
      },
      options: {
        validate: {
          payload: Joi.object({
            username: Joi.string().min(4).max(20),
            password: Joi.string().min(4).max(20),
          }),
        },
      },
    },
  ]);
};
