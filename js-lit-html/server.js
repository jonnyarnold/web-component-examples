const express = require("express");

const app = express();

app.use("/", express.static("./build", {
  // Redirect "foo/" to "foo/index.html", then "foo/index.js"
  extensions: ["html", "js"]
}));

app.listen(8000);
