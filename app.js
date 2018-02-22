const db = require('./database.js');

db.query('select * from foo where foo.bar = 1', (err, result) => {
    if (err) {
        return console.error(err);
    }

    console.log(result);
});