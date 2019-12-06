create database futuredata;

use futuredata;

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar(45),
rua varchar(45),
numero varchar(45),
bairro varchar(45),
cep varchar (45),
cidade varchar(45),
senha varchar (45)
);

drop table usuario;
select * from usuario;