const logger = require("./logger");

const errorHandler = (error, req, res, next) => {
      const stack = error.stack;
      const details = error.getAllCustomErrorData();

      logger.error(`${stack} \n \n error data details \n ${JSON.stringify(details, null, 4)} `);

      next();
};

module.exports = errorHandler;
