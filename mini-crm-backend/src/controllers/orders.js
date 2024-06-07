// src/controllers/orders.js
const db = require('../config/db');

// Controller to add a new order
const addOrder = (req, res) => {
    const { customer_id, order_date, order_amount } = req.body;
    const sql = 'INSERT INTO orders (customer_id, order_date, order_amount) VALUES (?, ?, ?)';
    db.query(sql, [customer_id, order_date, order_amount], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Order added successfully', orderId: result.insertId });
        }
    });
};

// Controller to get orders by customer ID
const getOrdersByCustomerId = (req, res) => {
    const { customerId } = req.params;
    const sql = 'SELECT * FROM orders WHERE customer_id = ?';
    db.query(sql, [customerId], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports = { addOrder, getOrdersByCustomerId };
