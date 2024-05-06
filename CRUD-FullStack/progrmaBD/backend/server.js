const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');
app.use(express.static('views/imagens'));

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

        res.render("index.ejs", { carros: rows });
    });
});

app.get("/carros", function (req, res) {
    const sql = "SELECT * FROM Carro";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("carros.ejs", { carros: rows });
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
app.get("/adicionarCarro", function (req, res) {
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
        res.redirect("/carros");
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

        res.redirect("/carros");
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
    
        res.redirect("/carros");
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


app.post("/inserirFuncionario", function (req, res) {
    const sql = "INSERT INTO Funcionario (nome, email, senhaFun) VALUES (?, ?, ?)";
    const dadosFuncionario = [req.body.nome, req.body.email, req.body.senha];

    connection.query(sql, dadosFuncionario, function (err, result) {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: 'Duplicate entry. Email already exists.' });
            } else {
                console.error(err.message);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
        res.json({ success: true, insertId: result.insertId });
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


app.post("/editarFuncionario/:id", function (req, res) {
    const funcionarioId = req.params.id;
    const { nome, email, senhaFun } = req.body;

    const sql = "UPDATE Funcionario SET nome = ?, email = ?, senhaFun = ? WHERE idFuncionario = ?";

    connection.query(sql, [nome, email, senhaFun, funcionarioId], function (err, result) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }
        res.redirect("/funcionarios");
    });
});



app.get("/deleteFuncionario/:id", function (req, res) {
    const funcionarioId = req.params.id;

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


app.get("/inserirCliente", function (req, res) {
    res.render("inserirCliente.ejs", { dados: {} });
});
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
            console.log("Cliente deleted successfully");

            res.redirect("/clientes");
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
    const inserirCompraQuery = "INSERT INTO Compra (idCarro, idCliente, dataCompra) VALUES (?, ?, ?)";
    const parametros = [idCarro, idCliente, dataCompra];
    connection.query(inserirCompraQuery, parametros, (erro, resultado) => {
        if (erro) {
            console.error("Error adding purchase:", erro.message);
            return res.status(500).send("Internal Server Error");
        }
        console.log("Compra adicionada com sucesso:", resultado);
        res.redirect("/mostrarCompras");
    });
});
app.get("/adicionarCompra", function (req, res) {
    const sqlClientes = "SELECT idCliente, nome FROM Cliente";
    connection.query(sqlClientes, function (err, rows) {
        if (err) {
            console.error("Error fetching clients:", err.message);
            return res.status(500).send("Internal Server Error");
        }
        res.render("adicionarCompra.ejs", { clientes: rows });
    });
});


app.get('/ordenarPorPreco', (req, res) => {
    const sql = 'SELECT * FROM Carro ORDER BY preco ASC';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.render('carros.ejs', { carros: results });
    });
  });

  app.get('/ordenarPorAno', (req, res) => {
    const sql = 'SELECT * FROM Carro ORDER BY ano ASC';
  
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.render('carros.ejs', { carros: results });
    });
  });
  
 
  app.get("/agrupar", function (req, res) {
    const sql = "SELECT marca, COUNT(*) as total_carros FROM Carro GROUP BY marca";

    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }
        const tableHtml = `
        <div class="container mt-5">
            <h2>Contagem de Carros por Marca</h2>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Marca</th>
                        <th scope="col">Total de Carros</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(row => `
                        <tr>
                            <td>${row.marca}</td>
                            <td>${row.total_carros}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    

        // Renderizar a página com a contagem de carros por marca
        res.render("selecionarMarca.ejs", { dados: rows, tabelaHtml: tableHtml });
    });
});





app.get("/selecionar", function (req, res) {
    const sql = `
        SELECT F.idFuncionario, F.nome, SUM(C.preco) as total_vendas
        FROM Funcionario F
        JOIN Carro C ON F.idFuncionario = C.idFuncionario
        JOIN Compra CO ON C.idCarro = CO.idCarro
        GROUP BY F.idFuncionario
        HAVING total_vendas > 50000;
    `;
    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }
        const tableHtml = `
            <div class="container">
                <h2>Funcionários com Vendas Superiores a 50000</h2>
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Nome do Funcionário</th>
                            <th>Total de Vendas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(row => `
                            <tr>
                                <td>${row.nome}</td>
                                <td>${row.total_vendas}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        res.render("selecionarMarca.ejs", { dados: rows, tabelaHtml: tableHtml });
    });
});

app.get("/selecionarCarros", function (req, res) {
    const sql = `
        SELECT C.modelo, C.preco
        FROM Funcionario F
        JOIN Carro C ON F.idFuncionario = C.idFuncionario
        JOIN Compra CO ON C.idCarro = CO.idCarro
        GROUP BY C.idCarro
        HAVING SUM(C.preco) < 50000;
    `;
    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }
        const tableHtml = `
            <div class="container">
                <h2>Carros com Vendas Abaixo de 50000</h2>
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Modelo</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(row => `
                            <tr>
                                <td>${row.modelo}</td>
                                <td>${row.preco}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        res.render("selecionarMarca.ejs", { dados: rows, tabelaHtml: tableHtml });
    });
});



// Rota para exibir informações dos funcionários
app.get("/Desempenho", function (req, res) {
    const sql = `
    SELECT 
        Funcionario.nome, 
        COUNT(Compra.idCompra) AS totalCompras,
        MIN(Compra.dataCompra) AS primeiraCompra,
        MAX(Compra.dataCompra) AS ultimaCompra
    FROM 
        Funcionario
        LEFT JOIN Carro ON Funcionario.idFuncionario = Carro.idFuncionario
        LEFT JOIN Compra ON Carro.idCarro = Compra.idCarro
    GROUP BY 
        Funcionario.nome
        WITH ROLLUP;
    `;
    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("funcionariosInfo.ejs", { dados: rows });
    });
});


// Rota para exibir informações dos clientes
app.get("/DesempenhoCliente", function (req, res) {
    const sql = `
    SELECT
    Cliente.nome,
    COUNT(Compra.idCompra) AS totalCompras,
    MIN(Compra.dataCompra) AS primeiraCompra,
    MAX(Compra.dataCompra) AS ultimaCompra
FROM
    Compra
RIGHT JOIN
    Cliente ON Cliente.idCliente = Compra.idCliente
GROUP BY
    Cliente.nome
WITH ROLLUP;

    `;
    connection.query(sql, function (err, rows) {
        if (err) {
            console.error("Error:", err.message);
            return res.status(500).send("Internal Server Error");
        }

        res.render("clientesInfo.ejs", { dados: rows });
    });
});






const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
