var db = require("./db_config")

const sql = "CREATE DATABASE node1";
db.query(sql, function(err, result){
 if(err) throw err;
 console.log('database created');
})