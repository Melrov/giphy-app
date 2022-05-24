require("dotenv").config();
const fs = require("fs");
const SERVER_PORT = process.env.PORT || 8080;

const Hapi = require("@hapi/hapi");
const Path = require("path");

const { configureAuthRoutes } = require("./server/routes/auth.routes");
const { configureFavoritesRoutes } = require("./server/routes/favorites.routes");

const init = async () => {
  console.log(Path.join(__dirname, "build"));
  const server = Hapi.server({
    port: SERVER_PORT,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "build"),
      },
    },
  });
  await server.register(require("@hapi/inert"));

  server.route({
    method: "GET",
    path: "/{path*}",
    handler: {
      directory: {
        path: ".",
        redirectToSlash: true,
        index: true,
      },
    },
  });
  await configureAuthRoutes(server);
  await configureFavoritesRoutes(server);

  await server.start();
  console.log("Example app listening on port %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
