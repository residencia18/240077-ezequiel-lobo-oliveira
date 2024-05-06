const express = require('express');
const router = express.Router();
const connection = require('../server'); // Importa a conexão do banco de dados

// Rota para mostrar informações de funcionários
app.get("/funcionarios", function (req, res) {
    const sql = "SELECT * FROM Funcionario";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("funcionarios.ejs", { dados: rows });
    });
});

// Rota para exibir formulário de inserção de funcionário
app.get("/inserirFuncionario", function (req, res) {
    res.render("inserirFuncionario.ejs", { dados: {} });
});

// Rota para processar o formulário de inserção de funcionário
app.post("/inserirFuncionario", function (req, res) {

    
    const sql = "INSERT INTO Funcionario (nome, email, senhaFun) VALUES (?, ?, ?)";
    const dadosFuncionario = [req.body.nome, req.body.email, req.body.senha];

    connection.query(sql, dadosFuncionario, function (err, result) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Inserted ID: ${result.insertId}`);
        res.redirect("/funcionarios");
    });
});

app.get("/editarFuncionario/:id", function (req, res) {
    const funcionarioId = req.params.id;
    const sql = "SELECT * FROM Funcionario WHERE idFuncionario = ?";

    connection.query(sql, [funcionarioId], function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("editarFuncionario.ejs", { dados: rows[0] });
    });
});

// Assuming you have a route to handle the form submission for updating employee information
app.post("/editarFuncionario/:id", function (req, res) {
    const funcionarioId = req.params.id;
    const { nome, email, senhaFun } = req.body;

    // Assuming you have a SQL query to update employee information
    const sql = "UPDATE Funcionario SET nome = ?, email = ?, senhaFun = ? WHERE idFuncionario = ?";

    connection.query(sql, [nome, email, senhaFun, funcionarioId], function (err, result) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Assuming you want to redirect to the employee list page after successful update
        res.redirect("/funcionarios");
    });
});



app.get("/deleteFuncionario/:id", function (req, res) {
    const funcionarioId = req.params.id;

    // Antes de excluir o funcionário, exclua registros relacionados em outras tabelas, se necessário.
    // Substitua 'outraTabela' pelo nome real da tabela relacionada.
    const sqlDeleteRelacionados = "DELETE FROM funcionario WHERE idFuncionario = ?";
    connection.query(sqlDeleteRelacionados, [funcionarioId], function (err, result) {
        if (err) {
            console.error("Error deleting related records:", err.message);
            return res.status(500).send("Internal Server Error: " + err.message);
        }

        const sqlDeleteFuncionario = "DELETE FROM Funcionario WHERE idFuncionario = ?";
        connection.query(sqlDeleteFuncionario, [funcionarioId], function (err, result) {
            if (err) {
                console.error("Error deleting funcionario:", err.message);
                return res.status(500).send("Internal Server Error: " + err.message);
            }

            console.log("Funcionario deleted successfully");

            res.redirect("/funcionarios");
        });
    });
});


module.exports = router;
