const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'gestaobd',
    multipleStatements: true,
});

connection.connect((err) => {
    if (err) {
        console.error("Failed to connect to the database:", err);
        return;
    }
    console.log("Connected to the database!");
});
//Comandos para CARRO
// Rota para mostrar informações de carros
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


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
