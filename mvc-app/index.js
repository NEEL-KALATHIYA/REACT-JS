const express = require("express");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  console.log("server is wroking on api");
});
app.listen(8090, () => {
  console.log("Server is running on port 8113");
});
