const express = require('express');
const mysql = require('mysql');
const routes = require('./routes/routes');

const app = express();
app.use(express.json()); // for parsing application/json
app.use(routes);

const port = 3000;

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});