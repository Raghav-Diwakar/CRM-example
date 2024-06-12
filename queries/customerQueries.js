export const customerQueries = {
    existingCustomer: `SELECT * FROM customers WHERE email = ?`,
    addCustomer: `INSERT INTO customers (name, email, total_spends, visits, last_visit) VALUES (?, ?, ?, ?, ?)`
};
