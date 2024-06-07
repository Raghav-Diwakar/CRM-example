// src/controllers/customers.js
const db = require('../config/db');

const addCustomer = (req, res) => {
  const { name, email, total_spends, max_visits, last_visit_date } = req.body;
  const sql = 'INSERT INTO customers (name, email, total_spends, max_visits, last_visit_date) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, total_spends, max_visits, last_visit_date], (err, result) => {
    if (err) throw err;
    res.send('Customer added...');
  });
};

// Controller to get customer by ID
const getCustomerById = (req, res) => {
  const customerId = req.params.customerId;
  const sql = 'SELECT * FROM customers WHERE id = ?';
  db.query(sql, [customerId], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else if (results.length === 0) {
          res.status(404).json({ error: 'Customer not found' });
      } else {
          res.status(200).json(results[0]);
      }
  });
};

module.exports = { addCustomer,  getCustomerById  };
