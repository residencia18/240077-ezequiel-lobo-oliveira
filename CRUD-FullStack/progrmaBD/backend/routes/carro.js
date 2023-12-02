const express = require('express');
const router = express.Router();
const connection = require('../server'); // Importa a conexão do banco de dados

app.get("/", function (req, res) {
    const sql = "SELECT * FROM Carro";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("index.ejs", { dados: rows });
    });
});

// Rota para inserir informações de carro
app.get("/inserirCarro", function (req, res) {
    res.render("inserirCarro.ejs", { dados: {} });
});

app.post("/inserirCarro", function (req, res) {
    const sql = "INSERT INTO Carro (marca, modelo, ano, preco, idFuncionario) VALUES (?, ?, ?, ?, ?)";
    const dadosCarro = [req.body.marca, req.body.modelo, req.body.ano, req.body.preco, req.body.idFuncionario];

    connection.query(sql, dadosCarro, function (err, result) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Inserted ID: ${result.insertId}`);
        res.redirect("/");
    });
});

app.get("/editarCarro/:id", function (req, res) {
    const carroId = req.params.id;
    const sql = "SELECT * FROM Carro WHERE idCarro = ?";

    connection.query(sql, [carroId], function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("editarCarro.ejs", { dados: rows[0] });
    });
});

app.post("/editarCarro/:id", function (req, res) {
    const carroId = req.params.id;
    const { marca, modelo, ano, preco, idFuncionario } = req.body;
    const sql = "UPDATE Carro SET marca = ?, modelo = ?, ano = ?, preco = ?, idFuncionario = ? WHERE idCarro = ?";

    connection.query(sql, [marca, modelo, ano, preco, idFuncionario, carroId], function (err, result) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.redirect("/");
    });
});

app.get("/deleteCarro/:id", function (req, res) {

    const carroId = req.params.id;

    const sql = "DELETE FROM Carro WHERE idCarro = ?";

    connection.query(sql, [carroId], function (err, result) {
        if (err) {
            console.error("Error deleting carro:", err.message);
            return res.status(500).send("Internal Server Error: " + err.message);
        }
    
        console.log("Carro deleted successfully");
    
        res.redirect("/");
    });
});



module.exports = router;
