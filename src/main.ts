import express from "express";
import bodyParser from "body-parser";

const app = express();
app.listen(3000);
app.use(bodyParser.json());

app.post("/", function (req, res) {
  res.status(200).send("Hello world");
});
