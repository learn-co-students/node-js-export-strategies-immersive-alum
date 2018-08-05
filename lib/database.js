const pg = require('pg');

// WHOA! Inline `require`!
const client = new pg.Client(require('./database_config'));

exports.query = function(queryString, callback) {
  client.connect(this.url, (err, client, done) => {
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
