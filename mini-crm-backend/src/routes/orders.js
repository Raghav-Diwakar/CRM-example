// src/routes/orders.js
const express = require('express');
const router = express.Router();
const { addOrder, getOrdersByCustomerId } = require('../controllers/orders');

// Route to add a new order
router.post('/', addOrder);

// Route to get orders by customer ID
router.get('/customer/:customerId', getOrdersByCustomerId);

module.exports = router;
