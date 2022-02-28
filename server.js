const express = require("express");
const cors = require("cors");
const app = express();
const { PORT } = require("./src/config");
const router = require("./src/modules");

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, console.log(PORT));
