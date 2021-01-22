const express = require("express");
const morgan = require("morgan");
const layout = require("/Users/kxp/wikistack/views/layout.js");

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res, next) => {
  await res.send(layout(""));
});

app.listen(1337);
