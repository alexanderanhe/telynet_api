const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PWD || 'root',
  database: process.env.DB_NAME || 'dev.test',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error('Error to connect database', err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;