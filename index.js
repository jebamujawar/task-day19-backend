const express = require("express");
const mongoose = require("mongoose");
const tasksRoute = require("./routes/tasks");

const app = express();
app.use(express.json()); // parse JSON

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/taskDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/tasks", tasksRoute);

// Test route
app.get("/", (req, res) => res.send("Server working"));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

