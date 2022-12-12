const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - write all logs with importance level of `errror` or less to `error.log`
        // - write all logs with importance level of `info` or less to `conbined.log`
        //
        new winston.transports.File({ filename: 'error.log', leel: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});









// console.log("Hola estoy saliendo por pantalla");
console.info("Hola, este es un mensaje informativo");
console.debug("Hola, este es un mensaje debug");
console.warn("Hola, este es un mensaje advertencia");
console.error("Hola, este es un mensaje error");