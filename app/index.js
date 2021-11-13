import express from 'express';
import helmet from 'helmet';
import winston from 'winston';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import log from "./logger/logger";
import apiClient from './api/apiClientRouter';
import apiAdmin from './api/apiAdminRouter';
import table from './database/table';

dotenv.config();

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(log.sendResponse);

app.get('/', function(req, res) {
    res.send('Hello World');
})

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

app.use('/api', apiClient);
app.use('/admin', apiAdmin);
app.use(notFound);
app.use(errorHandler);

const server = app.listen(process.env.PORT, function() {
    let host = server.address().address;
    let port = server.address().port;
    winston.info("app listening at http://localhost:" + port);
    table.sequelize.sync({ alter: true });
});