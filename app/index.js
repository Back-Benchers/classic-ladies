import express from 'express';
import helmet from 'helmet';
import winston from 'winston';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import log from "./logger/logger";
import apiClient from './api/apiClientRouter';
import apiAdmin from './api/apiAdminRouter';
import table from './database/table';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "'unsafe-inline'", "example.com"],
        },
    },
}));
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
        stack: err.stack
    });
}



// if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "docker") {
//     // Set static folder
//     process.env.PWD = process.cwd();
//     app.use(express.static(process.env.PWD, "adminui", "build"));
//     app.get('/', function(req, res) {
//         res.sendFile(process.env.PWD, "adminui", "build", "index.html");
//     });
// } else {
//     app.use(express.static(path.join(__dirname, "adminui", "build")));
//     app.get('/', function(req, res) {
//         res.sendFile(path.join(__dirname, "adminui", "build", "index.html"));
//     });
// }

app.get("/", (req, res) => {
    res.send("hello");
})

app.use('/api', apiClient);
app.use('/admin', apiAdmin);
app.use(notFound);
app.use(errorHandler);

const server = app.listen(process.env.PORT, function() {
    let host = server.address().address;
    let port = server.address().port;
    winston.info("app listening at http://localhost:" + port);
    table.sequelize.sync({ alter: true });
    winston.info("db conn esablished");
});