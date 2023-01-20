var mongo = require('mongodb');

module.exports = function () {

    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',

        )
    )
}