const mysql = require('mysql')

const con = mysql.createConnection({
    host: "database-0-snapshots-1.ctjannfbohrq.eu-west-1.rds.amazonaws.com",
    user: "admin",
    password: "apanova123#",
    database: "apanova"
});
con.connect(function(err) {
    if (err) throw err

});

module.exports = con;