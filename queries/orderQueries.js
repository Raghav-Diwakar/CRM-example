export const orderQueries = {
    addOrder: 'INSERT INTO orders (customer_id, amount, order_date) VALUES (?, ?, ?)',
    getOrderById: 'SELECT * FROM orders WHERE id = ?',
    getOrdersByCustomerId: 'SELECT * FROM orders WHERE customer_id = ?',
};
