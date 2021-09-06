/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

// console.log(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME);

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "Admin",
    "password": "admin",
    "database": "social_network",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "Admin",
    "password": "admin",
    "database": "social_network",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
