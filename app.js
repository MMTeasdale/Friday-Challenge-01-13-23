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
    const customer = req.body;
    connection.query('INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) VALUES (520, `Mariah Teasdale`, `Teasdale`, `Mariah`, `980-269-9935`, `1580 Burke Duncan Road`, `NULL`, `Lancaster`, `South Carolina`, `29720`, `United States`, `897345`, `10400.94`)', customer, function (error, results) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(results);
        }
    });
});
app.use(express.json());
app.listen(port, function () {
    console.log("Listing on port ".concat(port));
});












