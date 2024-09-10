const express = require("express");
const logger = require("../services/logger");
const errorHandler = require("../services/errorHandler");

const myTryCatch = require("../services/myTryCatch");
const router = express.Router();

const Mailer = require("../classes/NodeMailer");
const CustomError = require("../classes/CustomError");

function testFunction() {
      const read = book;
}

router.get(
      "/s1",
      myTryCatch(async (req, res, next) => {
            testFunction();
            res.send("your all good");
      })
);

module.exports = router;
