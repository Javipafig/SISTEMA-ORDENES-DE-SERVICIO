const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/Tecnicos', (req, res) => {
    mysqlConnection.query('Select * from Tecnico', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});

router.post('/Tecnicos', (req, res) =>{
    const {Id_tecnico, Nombre_tecnico, Token_numero, Id_servicio} = req.body;
    console.log(req.body)
    mysqlConnection.query('INSERT INTO TECNICO SET ?', req.body, (error, result) =>{
        if(!err) {
            res,json({Status: 'Tecnico Guardado'});
        } else {
            console.log(err);
        }
    });

});

module.exports = router;
