import express from "express";
import request from "request";

const app = express();
const TARGET = "https://telegramic.org";

app.use("/", (req, res) => {
  const url = TARGET + req.originalUrl;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
