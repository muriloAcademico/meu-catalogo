const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "catalogo"
});

conexao.connect((erro) => {
    if (erro) {
        console.log("Erro ao conectar:", erro);
    } else {
        console.log("MySQL conectado!");
    }
});

module.exports = conexao;