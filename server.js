const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const articlesRoutes = require("./modules/articles/routes");
app.use('/api/articles', articlesRoutes);

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));