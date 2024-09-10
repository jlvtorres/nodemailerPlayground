const logger = require("./logger");
const Mailer = require("../classes/NodeMailer");

const mailer = new Mailer();

const errorHandler = async (error, req, res, next) => {
      logger.error(error);
      logger.error("====================");

      const stack = error.stack;
      const details = error.getAllCustomErrorData();
      const timestamp = details.timestamp;
      const subject = `Error in app ${timestamp} `;

      const data = `${stack} \n \n error data details \n ${JSON.stringify(details, null, 4)} `;

      logger.error(data);

      await mailer.sendEmail("joseluis3506@gmail.com", subject, data);

      next();
};

module.exports = errorHandler;
