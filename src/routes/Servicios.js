const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('Select * from Servicios', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});

router.post('/', (req, res) =>{
        const {Id_servicio, Servicio} = req.body;
        console.log(req.body)
        mysqlConnection.query('INSERT INTO SERVICIOS SET ?', req.body, (error, result) =>{
            if(!err) {
                res,json({Status: 'Servicio Guardado'});
            } else {
                console.log(err);
            }
        });

});

module.exports = router;