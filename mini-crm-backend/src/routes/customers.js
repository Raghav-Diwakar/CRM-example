// src/routes/customers.js
const express = require('express');
const route = express.Router();
const { addCustomer } = require('../controllers/customers');

route.post('/addCustomer', addCustomer);

router.get('/:customerId', getCustomerById);

module.exports = route;
