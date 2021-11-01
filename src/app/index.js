import express from 'express';
import helmet from 'helmet';
import winston from 'winston';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import log from "./lib/logger";
import apiClient from './api/apiClientRouter';
import apiAdmin from './api/apiAdminRouter';

dotenv.config();

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(log.sendResponse);

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.use('/api', apiClient);
app.use('/admin', apiAdmin);

const server = app.listen(process.env.PORT, function() {
    let host = server.address().address;
    let port = server.address().port;
    winston.info("app listening at http://localhost:" + port)
});