const express = require("express");
const app = express();
const { router } = require("./router");

router(app);

app.listen(3000, () => {
  console.log("server is running on port 3000")
});