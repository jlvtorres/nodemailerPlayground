//gets the proper .env file to use based on which script is ran from package.json file
const envPath = `./configs/.env.${process.env.NODE_ENV}`;
require("dotenv").config({ path: envPath });
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("./services/logger");
const errorHandler = require("./services/errorHandler");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const testing = require("./routes/tests");
const myTryCatch = require("./services/myTryCatch");
app.use("/", testing);

app.get(
      "/test1",
      myTryCatch((req, res, next) => {
            res.send("your good");
      })
);

app.use(errorHandler);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
      console.log(`server running on port ${port} at http://localhost:${port}/`);
});
