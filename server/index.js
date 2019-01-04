const express = require("express");
const next = require("next");
const { join } = require("path");

const isDev = process.env.NODE_ENV !== "production";
const app = next({ dev: isDev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// Next.js wraps the Express.js server in this promise
// Express.js should reference `server` instead of the usual `app`
app
  .prepare()
  .then(() => {
    // Use Express.js for routing
    const server = express();

    // Progressive Web App: Route for the service worker that next-offline creates
    server.use("/service-worker.js", (req, res) => {
      app.serveStatic(req, res, join(__dirname, "../.next/service-worker.js"));
    });

    // Pages dynamically rendered from API response
    // need to be server-side rendered
    server.get("/post/:id", (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, "/post", queryParams);
    });

    server.get("/user/:id", (req, res) => {
      const queryParams = { id: req.params.id };
      app.render(req, res, "/user", queryParams);
    });

    // All requests that reach this point can be handled normally by Next.js
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(err => {
    console.log("An error occurred, unable to start the server.");
    console.log(err);
  });
