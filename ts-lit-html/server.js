const express = require("express");

const app = express();

app.get("/", (req, res) => res.sendFile("./src/index.html", { root: "." }));

app.use("/", express.static("./build", {
  // Redirect "foo/" to "foo/index.js"
  extensions: ["js"]
}));

app.listen(8000);
