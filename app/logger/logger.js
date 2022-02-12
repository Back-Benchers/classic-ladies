import winston from 'winston';

winston.configure({
    transports: [
        new winston.transports.Console({
            level: 'info',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ]
});

const getResponse = message => ({
    error: true,
    message
});

const logUnauthorizedRequests = req => {
    // todo
};

const sendResponse = (err, req, res, next) => {
    if (err && err.name === 'UnauthorizedError') {
        logUnauthorizedRequests(req);
        res.status(401).send(getResponse(err.message));
    } else if (err) {
        winston.error(err.stack);
        res.status(500).send(getResponse(err.message));
    } else {
        next();
    }
};

export default { sendResponse }