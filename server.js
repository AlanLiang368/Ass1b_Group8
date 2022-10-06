const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("frontend/build"));
const articlesRoutes = require("./modules/articles/routes");
app.use('/api/articles', articlesRoutes);

// Connect Database
connectDB();

app.use(function (req, res) {
  const path = require("path");
  res.sendFile(path.resolve(__dirname, './frontend/build/index.html'));
})
const port = process.env.PORT || 8083;

app.listen(port, () => console.log(`Server running on port ${port}`));