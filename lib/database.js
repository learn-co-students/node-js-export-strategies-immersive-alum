const pg = require('pg');

const client = new pg.Client(require('./database_config'));

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
