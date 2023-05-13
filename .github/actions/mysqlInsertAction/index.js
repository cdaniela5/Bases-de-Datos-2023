const mysql = require('mysql');
const core = require('@actions/core');

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const connection = mysql.createConnection({
  host,
  user,
  password,
  database
});

const data = core.getInput('data');
const records = JSON.parse(data);

connection.connect();

let sql = 'INSERT INTO table_name (field1, field2, field3) VALUES ?';
let values = [];

records.forEach(record => {
  values.push([record.field1, record.field2, record.field3]);
});

connection.query(sql, [values], function (error, results, fields) {
  if (error) {
    core.setFailed(error.message);
  } else {
    core.setOutput('result', 'Inserted ' + results.affectedRows + ' records');
  }
});

connection.end();
