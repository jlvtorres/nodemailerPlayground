const express = require("express");
const logger = require("../services/logger");
const errorHandler = require("../services/errorHandler");

const myTryCatch = require("../services/myTryCatch");
const router = express.Router();

const CustomError = require("../classes/CustomError");

router.get(
      "/s1",
      myTryCatch((req, res, next) => {
            //throw new CustomError("Something has gone wrong", 400, { name: "bob", cinfo: 20 });

            const list = null;

            const test2 = list[1];
            const result = `jose ${test2}`;
            res.send("your all good");
      })
);

module.exports = router;
