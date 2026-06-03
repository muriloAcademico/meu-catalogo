/*
CONEXÃO NO MYSQL WORKBENCH

Hostname: centerbeam.proxy.rlwy.net
Port: 12624
Username: root
Password: (senha do Railway)
Default Schema: railway

*/
USE railway;

CREATE TABLE itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT,
    nota_preco VARCHAR(20)
);

SHOW TABLES;