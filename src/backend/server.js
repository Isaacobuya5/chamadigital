const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

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

//this allows requests from all origins to access your API
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
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
