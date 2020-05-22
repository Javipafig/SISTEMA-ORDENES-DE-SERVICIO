const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/Clientes', (req, res) => {
    mysqlConnection.query('Select * from Clientes', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});


router.post('/Clientes', (req, res) =>{
    const {Id_cliente, Nombre, TicketNumero} = req.body;
    console.log(req.body)
    mysqlConnection.query('INSERT INTO CLIENTES SET ?', req.body, (error, result) =>{
        if(!err) {
            res,json({Status: 'Cliente Guardado'});
        } else {
            console.log(err);
        }
    });

});



module.exports = router;
