const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const dropTableSQL = `DROP TABLE IF EXISTS people`
connection.query(dropTableSQL)

const createTableSQL = `CREATE TABLE people (id int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))`
connection.query(createTableSQL)

const insertSQL = `INSERT INTO people(name) values ('Michel Scott'), ('Dwight Shrute'), ('Kelvin Malone')`
connection.query(insertSQL)

connection.end()

app.get('/', (req,res) => {
    let html = '<h1>Full Cycle Rocks!</h1><br/>'

    let conn = mysql.createConnection(config)

    conn.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;

        Object.keys(result).forEach(function(key) {
            var row = result[key];
            
            html = html + row.id + " - " + row.name + "<br/>"
        });

        res.send(html)
    });

    conn.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})