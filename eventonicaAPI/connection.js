// require packages
const { Pool } = require('pg');
const pgKey = require('./keys');

// create PostgreSQL connection
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: pgKey.dbPassword,
  database: 'eventonica'
});

module.exports = pool;
