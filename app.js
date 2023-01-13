"use strict";
exports.__esModule = true;
var express = require("express");
var mysql_1 = require("mysql");
var app = express();
var port = 8000;
var connection = mysql_1.createConnection({
    host: '127.0.0.1',
    user: 'Mariah',
    password: 'LunaNiver14',
    database: 'classicmodels'
});
app.get('/', (req, res) => {
    connection.query('SELECT * FROM customers', function (error, results) {
        if (error) throw error;
        res.send(results);
    });
});
app.post('/customers', (req, res) => {
    try {
        const customer = req.body;
        if (!customer.customerName || !customer.contactLastName || !customer.phone) {
            return res.status(400).send({ error: 'Invalid customer data' });
        }
        connection.query('INSERT INTO customers SET ?', customer, function (error, results) {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send(results);
            }
        });
    } catch (error) {
        res.status(500).send({ error: 'Error inserting customer' });
    }
});

app.use(express.json());
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});