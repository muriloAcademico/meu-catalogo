const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar:", erro);
    } else {
        console.log("Banco conectado!");
    }
});

module.exports = conexao;