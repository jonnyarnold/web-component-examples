const express = require("express");

const app = express();

app.get("/", (req, res) => res.sendFile("./src/index.html", { root: "." }));

app.use("/", express.static("./build", {
  // Redirect "foo" to "foo.js"
  extensions: ["js"],

  // Redirect "foo/" to "foo/index.js"
  index: ["index.js"]
}));

// Show source for sourcemaps
app.use("/src", express.static("./src"));

app.listen(8000);
