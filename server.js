const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 7070;

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
