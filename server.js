// "use strict";
const express = require("express");

const bodyParser = require("body-parser");
const imageroute = require("./routes/imageroute");
const app = express();

app.use(bodyParser.json());
app.use(imageroute);

app.listen("5000", console.log("SERVER IS UP AND RUNNING ON 5000"));
