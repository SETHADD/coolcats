const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(bp.json());
// Create an endpoint to the root route

const Cats = require("./models/Cats");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {

  response.status(200).json("can I be heard?");
});

app.get("/cats", async (request, response) => {
  const allCats = await Cats.find(request.query);
  response.status(200).json(allCats);
});
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
