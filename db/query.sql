CREATE DATABASE IF NOT EXISTS SERVICESCOMPANY;

USE SERVICESCOMPANY;

CREATE TABLE SERVICIOS (
	Id_servicio INT(11) NOT NULL AUTO_INCREMENT,
    Servicio VARCHAR(120) NOT NULL,
    PRIMARY KEY(Id_servicio)
); 


/*vistas*/
DESCRIBE SERVICIOS;

Select * from servicios;

CREATE TABLE TICKET(
	Numero_ticket INT(11) NOT NULL AUTO_INCREMENT,
    Fecha DATE NOT NULL,
    PRIMARY KEY(Numero_ticket),
	Id_servicio INT(11) REFERENCES SERVICIOS,
    Numero_token INT(11) NOT NULL 
);
ALTER TABLE TICKET ADD FOREIGN KEY(Id_servicio) REFERENCES SERVICIOS(Id_servicio);
INSERT INTO TICKET VALUES
(4,9/04/20,'1',14);

select * from ticket;

CREATE TABLE CLIENTES (
	Id_cliente INT(11) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    PRIMARY KEY(Id_cliente),
   TicketNumero INT(11) REFERENCES TICKET
    );

describe clientes;

/*ingresamos el cliente*/
INSERT INTO CLIENTES VALUES
(2,'Roberto','3');
    
    select * from clientes;
    
	ALTER TABLE CLIENTES ADD FOREIGN KEY (TicketNumero) REFERENCES TICKET(Numero_ticket);
	

CREATE TABLE TOKEN(
	Token_numero INT(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(Token_numero),
    Estado_servicio VARCHAR(50) DEFAULT NULL,
    Id_servicio  INT(11) REFERENCES SERVICIO,
    Tecnico_id INT(11) REFERENCES TECNICO
);
	
/*REVISAR*/
    ALTER TABLE TOKEN ADD FOREIGN KEY(Id_servicio) REFERENCES SERVICIO(Id_servicio);

	select * from token;

CREATE TABLE TECNICO(
	Id_tecnico INT(11) NOT NULL AUTO_INCREMENT,
    Nombre_tecnico VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY(Id_tecnico),
    Token_numero INT(11) references TOKEN,
    Id_servicio INT(11) REFERENCES TOKEN
);
	select * from tecnico;

ALTER TABLE TOKEN ADD FOREIGN KEY(Tecnico_id) REFERENCES TECNICO(Id_tecnico);
ALTER TABLE TECNICO ADD FOREIGN KEY (Token_numero) REFERENCES TOKEN(Token_numero);

/*Insertar datos tecnico*/
INSERT INTO TECNICO VALUES
(2,'Diego Irreño','11','3');

DESCRIBE TECNICO;
select * from tecnico;


/*INGRESAR INFORMACION*/

INSERT INTO SERVICIOS VALUES 
(1,'Mantenimiento de Televisores'),
(2,'Instalacion de soportes para Televisores');



INSERT INTO CLIENTES VALUES
(1,'Javier','1');

select * from token;
INSERT INTO TOKEN VALUES
(12, 'FINALIZADO','3','1');


