const db = require('./db_config');
const sql = `CREATE TABLE Users 
(
 nik int NOT NULL AUTO_INCREMENT,
 name VARCHAR(255), 
 level VARCHAR(255),
 password VARCHAR(255),
 PRIMARY KEY (nik)
)`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});