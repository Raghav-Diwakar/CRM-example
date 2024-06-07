// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');

const app = express();

app.use(bodyParser.json());

// Define routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
