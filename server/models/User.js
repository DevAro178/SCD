const mysql = require('mysql');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ammad',
  password: 'kN/dSzxxBYTUrgm)',
  database: 'scd'
});

class User {
  static findByUsername(username, callback) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  }

  static register(username, password, callback) {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err;
      const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(sql, [username, hash], (err, result) => {
        if (err) throw err;
        callback(result.insertId);
      });
    });
  }
}

module.exports = User;