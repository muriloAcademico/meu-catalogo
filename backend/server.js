const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/itens", (req, res) => {
    const { nome, categoria, descricao, nota_preco } = req.body;

    const sql =
        "INSERT INTO itens(nome,categoria,descricao,nota_preco) VALUES (?,?,?,?)";

    db.query(
        sql,
        [nome, categoria, descricao, nota_preco],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                mensagem: "Item cadastrado"
            });
        }
    );
});

app.get("/itens", (req, res) => {
    db.query("SELECT * FROM itens", (err, result) => {
        if (err) return res.status(500).json(err);

        res.json(result);
    });
});

app.delete("/itens/:id", (req, res) => {
    db.query(
        "DELETE FROM itens WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                mensagem: "Item removido"
            });
        }
    );
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});