import express from "express";
import helmet from "helmet";
import winston from "winston";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import log from "./logger/logger";
import apiClient from "./api/apiClientRouter";
import apiAdmin from "./api/apiAdminRouter";
import apiCommon from "./api/apiCommonRoute";
import table from "./database/table";

dotenv.config();

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "'unsafe-inline'", "example.com"],
      },
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(log.sendResponse);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", apiClient);
app.use("/admin", apiAdmin);
app.use("/common", apiCommon);
app.use(notFound);
app.use(errorHandler);

const server = app.listen(process.env.PORT, function () {
  table.sequelize.sync({ alter: true}).then(() => {
    winston.info("db conn esablished");
  });
});