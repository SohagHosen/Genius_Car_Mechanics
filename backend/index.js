const express = require("express");
const cors = require("cors");

const app = express();
app.use(express());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Response from backend");
});

app.listen(port, () => console.log("Server started @ " + port));
