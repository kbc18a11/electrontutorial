const Datastore = require('nedb');
const filename = '../dbfile/test.db';
const db = new Datastore({
    filename: filename
});
db.loadDatabase();
