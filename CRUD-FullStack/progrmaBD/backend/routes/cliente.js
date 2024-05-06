const express = require('express');
const router = express.Router();
const connection = require('../server'); // Importa a conexão do banco de dados



// Rota para mostrar informações de clientes


app.get("/editarCliente/:id", function (req, res) {
    const clienteId = req.params.id;
    const sql = "SELECT * FROM Cliente WHERE idCliente = ?";

    connection.query(sql, [clienteId], function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("editarCliente.ejs", { dados: rows[0] });
    });
});

// Assuming you have a route to handle the form submission for updating client information
app.post("/editarCliente/:id", function (req, res) {
    const clienteId = req.params.id;
    const { nome, email, senhaCli } = req.body;

    // Assuming you have a SQL query to update client information
    const sql = "UPDATE Cliente SET nome = ?, email = ?, senhaCli = ? WHERE idCliente = ?";

    connection.query(sql, [nome, email, senhaCli, clienteId], function (err, result) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Assuming you want to redirect to the client list page after a successful update
        res.redirect("/clientes");
    });
});


app.get("/clientes", function (req, res) {
    const sql = "SELECT * FROM Cliente";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("clientes.ejs", { dados: rows });
    });
});

// Rota para exibir formulário de inserção de cliente
app.get("/inserirCliente", function (req, res) {
    res.render("inserirCliente.ejs", { dados: {} });
});

// Rota para processar o formulário de inserção de cliente
app.post("/inserirCliente", function (req, res) {
    const sql = "INSERT INTO Cliente (nome, email, telefone, endereco, senhaCli) VALUES (?, ?, ?, ?, ?)";
    const dadosCliente = [req.body.nome, req.body.email, req.body.telefone, req.body.endereco, req.body.senha];

    connection.query(sql, dadosCliente, function (err, result) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Inserted ID: ${result.insertId}`);
        res.redirect("/clientes");
    });
});

app.post("/editarCliente/:id", function (req, res) {
    const clienteId = req.params.id;
    const { nome, email, telefone, endereco, senha } = req.body;
    const sql = "UPDATE Cliente SET nome = ?, email = ?, telefone = ?, endereco = ?, senhaCli = ? WHERE idCliente = ?";

    connection.query(sql, [nome, email, telefone, endereco, senha, clienteId], function (err, result) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.redirect("/clientes");
    });
});

app.get("/deleteCliente/:id", function (req, res) {
    const clienteId = req.params.id;

    const sqlDeleteRelacionados = "DELETE FROM cliente WHERE idCliente = ?";
    connection.query(sqlDeleteRelacionados, [clienteId], function (err, result) {
        if (err) {
            console.error("Error deleting related records:", err.message);
            return res.status(500).send("Internal Server Error: " + err.message);
        }

        const sqlDeleteCliente = "DELETE FROM Cliente WHERE idCliente = ?";
        connection.query(sqlDeleteCliente, [clienteId], function (err, result) {
            if (err) {
                console.error("Error deleting cliente:", err.message);
                return res.status(500).send("Internal Server Error: " + err.message);
            }

            console.log("Cliente deleted successfully");

            res.redirect("/");
        });
    });
});


module.exports = router;
