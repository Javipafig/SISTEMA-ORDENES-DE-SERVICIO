const {Router} = require('express');
const router = Router();

router.get('/title', (req, res) =>{
        res,json({"Title": "Bienvedios SISTEMA DE ORDENES DE SERVICIOS"});


});

module.exports = router;