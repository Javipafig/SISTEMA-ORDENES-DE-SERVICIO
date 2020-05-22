const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/Servicios'));
app.use(require('./routes/ticket'));
app.use(require('./routes/Clientes'));
app.use(require('./routes/Token'));
app.use(require('./routes/Tecnicos'));
//Starting the Server
app.listen(app.get('port'), () => {
        console.log('Server on port 3000', app.get('port'));
        console.log('BIENVENIDO AL SISTEMA DE ORDENES DE SERVICIOS');
        console.log('Realice las pruebas en su localhost:3000');
});