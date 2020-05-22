const mysql = require('mysql');

const mysqlConnection = mysql.createConnection ({

        host:'localhost',
        user: 'root',
        password: '11111',
        database: 'SERVICESCOMPANY'
});

mysqlConnection.connect(function (err){
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('La BD Esta conectada Correctamete');
        }


});


module.exports = mysqlConnection;