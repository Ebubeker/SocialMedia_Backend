const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose connection
mongoose.connect(process.env.MONGO_ATLAS_DATABASE, () => {
  app.listen(PORT, () => {
    console.log("server running on port " + PORT);
  });
});

app.use("/login", require("./routes/usersRoute"));
