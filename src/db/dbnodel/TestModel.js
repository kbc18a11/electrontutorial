const Datastore = require('nedb');

class TestModel {
    constructor() {
        this.db = new Datastore('../dbfile/test.db');
    }
}

module.exports = TestModel;