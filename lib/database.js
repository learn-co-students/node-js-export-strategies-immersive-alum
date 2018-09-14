// database.js

// `pg` is a Node.js module for interacting
// with PostgreSQL databases
// https://github.com/brianc/node-postgres
const pg = require('pg');

const client = new pg.Client(require('./database_config'));


// function Database(url, config) {
//   this.url = url;
//   this.config = config;
// };
//
// Database.prototype.query = function(queryString, callback) {
//   pg.connect(this.url, (err, client, done) => {
//     if (err) {
//       done();
//       return callback(err);
//     }
//
//     client.query.apply(queryString, (err, result) => {
//       callback(err, result);
//       done();
//     });
//   });
// };



exports.query = function(queryString, callback) {
  pg.connect(this.url, (err, client, done) => {
    if (err) {
      done();
      return callback(err);
    }

    client.query(queryString, (err, result) => {
      callback(err, result);
      done();
    });
  });
};




module.exports = Database;
