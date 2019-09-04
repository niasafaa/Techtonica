const pool = require('./connection');
const app = require('./app');

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
