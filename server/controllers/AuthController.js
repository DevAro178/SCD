const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

class AuthController {
  static login(req, res) {
    const { username, password } = req.body;
    User.findByUsername(username, (user) => {
      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result) {
          const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
          res.json({ token });
        } else {
          res.status(401).json({ error: 'Incorrect password' });
        }
      });
    });
  }

  static register(req, res) {
    const { username, password, email } = req.body;
    const userType = 1; // default userType
    User.register(username, password, userType, email, (userId) => {
      res.json({ userId });
    });
  }
}

module.exports = AuthController;