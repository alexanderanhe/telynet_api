const mysql = require('mysql');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PWD || 'root',
  database: process.env.DB_NAME || 'dev.test',
  port: process.env.DB_PORT || 3306,
  multipleStatements: true
});

pool.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});

pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!
  // Use the connection
  console.log('db is connected');
});

module.exports = pool;