const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/Token', (req, res) => {
    mysqlConnection.query('Select * from Token', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});




module.exports = router;