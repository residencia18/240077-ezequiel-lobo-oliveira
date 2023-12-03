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
app.get("/catalogoCarros", function (req, res) {
    const sql = "SELECT * FROM Carro";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Render the view with the correct variable
        res.render("catalogoCarros.ejs", { dados: rows });
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



app.get("/mostrarCompras", function (req, res) {
    const sql = "SELECT * FROM compra";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Pass the data to the template
        res.render("mostrarCompras.ejs", { dadosCompras: rows });
    });
});


app.get("/cancelar/:id", function (req, res) {
    const clienteId = req.params.id;

    const sqlDeleteRelacionados = "DELETE FROM compra WHERE idCarro = ?";
    connection.query(sqlDeleteRelacionados, [clienteId], function (err, result) {
        if (err) {
            console.error("Error deleting related records:", err.message);
            return res.status(500).send("Internal Server Error: " + err.message);
        }

            console.log("Cliente deleted successfully");

            res.redirect("/mostrarCompras");
        });
    });

// Route to handle the purchase



app.get("/adicionarCompra", function (req, res) {

        res.render("adicionarCompra.ejs");
    });

// Route to handle the purchase
app.post('/adicionarCompra', (req, res) => {
    const idCarro = req.body.idCarro;
    const idCliente = req.body.idCliente;
    const dataCompra = req.body.dataCompra;

    // Inserir dados na tabela Compra
    const inserirCompraQuery = "INSERT INTO Compra (idCarro, idCliente, dataCompra) VALUES (?, ?, ?)";
    const parametros = [idCarro, idCliente, dataCompra];

    connection.query(inserirCompraQuery, parametros, (erro, resultado) => {
        if (erro) {
            console.error("Error adding purchase:", erro.message);
            return res.status(500).send("Internal Server Error");
        }

        console.log("Compra adicionada com sucesso:", resultado);

        // Redirecionar para a página de compras ou para onde desejar
        res.redirect("/mostrarCompras");
    });
});
app.get("/adicionarCompra", function (req, res) {
    // Fetch client information
    const sqlClientes = "SELECT idCliente, nome FROM Cliente";

    connection.query(sqlClientes, function (err, rows) {
        if (err) {
            console.error("Error fetching clients:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Render the "adicionarCompra" page with client data
        res.render("adicionarCompra.ejs", { clientes: rows });
    });
});


app.get("/ordenar", function (req, res) {
    // Lógica para ordenar carros por preço
    const sql = "SELECT * FROM Carro ORDER BY preco ASC"; // ASC para ordem ascendente, DESC para descendente

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Renderizar a página com a lista ordenada de carros
        res.render("index.ejs", { dados: rows });
    });
});

app.get("/agrupar", function (req, res) {
    // Lógica para contar carros por marca
    const sql = "SELECT marca, COUNT(*) as total_carros FROM Carro GROUP BY marca";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        // Renderizar a página com a contagem de carros por marca
        res.render("index.ejs", { dados: rows });
    });
});

app.get("/selecionar", function (req, res) {
    res.render("selecionarMarca.ejs");
});

app.post("/selecionar", function (req, res) {
    const quantidadeMinimaCarros = req.body.quantidadeMinimaCarros || 0;

    const sql = `
        SELECT marca, COUNT(*) as total_carros
        FROM Carro
        GROUP BY marca
        HAVING total_carros > ?
    `;

    connection.query(sql, [quantidadeMinimaCarros], function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("marcasComMaisDeNCarros.ejs", { dados: rows, quantidadeMinimaCarros });
    });
});



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
