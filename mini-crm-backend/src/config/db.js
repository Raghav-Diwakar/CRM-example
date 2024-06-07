// src/config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '4321',
  database: 'crm'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');// src/config/db.js 
});

module.exports = db;
