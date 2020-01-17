const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

// member routes
const memberRoutes = require("./routes/members");

// connecting to mongodb
mongoose
  .connect(
    "mongodb+srv://isaac:YZv5xlNvqwuJMa2Z@cluster0-zob1a.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Succesfully connected to mongodb");
  })
  .catch(error => {
    console.log("Unable to connect succesfully to mongodb");
    console.error(error);
  });

app.use(express.static(path.join(__dirname, "../..", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "build"));
});

// body parser
app.use(bodyParser.json());

// registering routes for all requests
app.use("/api", memberRoutes);

app.get("/api", (req, res) => {
  res.json({
    message: "You succesfuly sent a get request"
  });
});

app.post("/api", (req, res) => {
  res.json({
    message: "Data succesfuly created"
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
