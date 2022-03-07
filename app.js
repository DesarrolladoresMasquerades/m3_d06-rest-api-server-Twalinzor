require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/", allRoutes);

const projectRouter = require("./routes/project.routes");
app.use("/api/projects", projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api/tasks", taskRouter);

require("./error-handling")(app);

module.exports = app;
