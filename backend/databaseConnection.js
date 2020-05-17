const connection = {
    host: 'yourhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase',
};

var mysql = require('mysql');

module.exports = con = mysql.createPool(connection);