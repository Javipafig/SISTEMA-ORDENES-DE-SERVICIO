const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/Ticket', (req, res) => {
    mysqlConnection.query('Select * from TICKET', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});

module.exports = router;