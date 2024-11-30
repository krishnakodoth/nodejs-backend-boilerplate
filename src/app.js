const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = express.Router();
const apiRoutes = require('./routes');
const routes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
// Default 404 handler
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

module.exports = app;
