require('dotenv').config();
// const eventful = require('eventful-node');

const express = require('express');
const pool = require('../connection');

// const client = new eventful.Client(process.env.EVENTFUL_KEY);

const router = express.Router();

// Get All Users
router.get('/', (req, res) => {
  pool.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results.rows);
  });
});

// Create User
router.post('/', (req, res) => {
  const user = {
    username: req.body.username,
    age: req.body.age
  };

  pool.query(
    'INSERT INTO users (username, age) VALUES ($1, $2)',
    [user.username, user.age],
    error => {
      if (error) {
        throw error;
      }
      res.send('You added a user to the databese.');
    }
  );
});

module.exports = router;
