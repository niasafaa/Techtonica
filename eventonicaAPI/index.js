const express = require('express');
const pool = require('./connection');
const app = require('./app');

const exp = express();
const PORT = 3000;

// Connection to database
const pgConnect = () => {
  pool.connect(err => {
    if (err) throw err;

    console.log('Welcome to Eventonica');
    console.log('connected as Administrator');

    app.startQuestion(() => {
      pool.end();
    });
  });
};
pgConnect();

exp.use(express.urlencoded({ extended: false }));
exp.use(express.json());

exp.use('/api', require('./routes/api'));

exp.listen(PORT, () => console.log(`Server started on port ${PORT}`));
