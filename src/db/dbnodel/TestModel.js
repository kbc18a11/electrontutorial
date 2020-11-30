const Nedb = require('nedb-promise');

const datastore = new Nedb({ filename: '../dbfile/test.db', autoload: true });

class TestModel {
    constructor() {
    }

    async all() {
        return await datastore.find({});
    }

    /**
     * ドキュメント（レコード挿入）
     * @param {object} value 
     */
    async create(value) {
        await datastore.insert(value);
    }

}

module.exports = TestModel;