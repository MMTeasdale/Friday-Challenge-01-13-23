"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var express = require("express");
var app = express();
var axios = require("axios");
var connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "Mariah",
    password: "LunaNiver14",
    database: "classicmodels"
});
connect.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("connected to database :)");
    }
});
//READ OPERATION:
//Displays all the customers: In this endpoint
app.get("/", function (req, res) {
    connect.query("SELECT * FROM customers", function (error, results) {
        if (error) {
            res.status(500).send({ message: "Error fetching customers" });
        }
        else {
            res.status(200).send(results);
        }
    });
});
//CREATE OPERATION
connect.query("INSERT INTO customers (customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, city, country) VALUES (497, 'Otaku!', 'Teasdale', 'Mariah', '123-456-7890', '123 R2H St.', 'Fort Mill', 'USA')", function (error, results) {
    if (error) {
        console.error("Error inserting record: ".concat(error.message));
    }
    else {
        console.log("Record inserted successfully!");
    }
});
//UPDATE OPERATION:
connect.query("UPDATE customers SET customerName = 'V2 Otaku!' WHERE customerNumber = 497", function (error, results) {
    if (error) {
        console.error("Error updating record: ".concat(error.message));
    }
    else {
        console.log("Record updated successfully!");
    }
});
connect.query("DELETE FROM customers WHERE customerName = 'V2 Otaku!' WHERE customerNumber = 497", function (error, results) {
    if (error) {
        console.error("Error deleting record: ".concat(error.message));
    }
    else {
        console.log("Record deleted successfully!");
    }
});
app.listen(8000, function () {
    console.log("Server listening on port 8000");
});
