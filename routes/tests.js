const express = require("express");
const logger = require("../services/logger");
const errorHandler = require("../services/errorHandler");

const myTryCatch = require("../services/myTryCatch");
const router = express.Router();

const Mailer = require("../classes/NodeMailer");
const CustomError = require("../classes/CustomError");

router.get(
      "/s1",
      myTryCatch(async (req, res, next) => {
            //throw new CustomError("Something has gone wrong", 400, { name: "bob", cinfo: 20 });

            const mailer = new Mailer();

            await mailer.sendEmail(
                  "joseluis3506@gmail.com",
                  "this is where the subject goes",
                  "hello this is a just some text"
            );

            res.send("your all good");
      })
);

module.exports = router;
