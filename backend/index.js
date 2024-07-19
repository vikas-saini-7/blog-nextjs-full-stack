const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", () => {
  resizeBy.send("Working!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
