
CREATE DATABASE GESTAOBD;
USE GESTAOBD;

-- Tabela de Funcionários
CREATE TABLE Funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senhaFun VARCHAR(255) NOT NULL 
);

--- Tabela de Carros
CREATE TABLE Carro (
    idCarro INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    idFuncionario INT,
    FOREIGN KEY (idFuncionario) REFERENCES Funcionario(idFuncionario) ON DELETE CASCADE
);


-- Tabela de Clientes
CREATE TABLE Cliente (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    senhaCli VARCHAR(255) NOT NULL 
);

-- Tabela de Compras
CREATE TABLE Compra (
    idCompra INT PRIMARY KEY AUTO_INCREMENT,
    idCarro INT,
    idCliente INT,
    dataCompra DATE,
    FOREIGN KEY (idCarro) REFERENCES Carro(idCarro) ON DELETE CASCADE,
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente) ON DELETE CASCADE
);

INSERT INTO Funcionario (nome, email, senhaFun) VALUES 
    ('João Silva', 'joao.silva@email.com', 'senha123'),
    ('Maria Santos', 'maria.santos@email.com', 'senha456'),
    ('Carlos Oliveira', 'carlos.oliveira@email.com', 'senha789'),
    ('Ana Souza', 'ana.souza@email.com', 'senhaabc'),
    ('Lucas Pereira', 'lucas.pereira@email.com', 'senhaxyz'),
    ('Isabel Lima', 'isabel.lima@email.com', 'senha123'),
    ('Rafael Costa', 'rafael.costa@email.com', 'senha456'),
    ('Julia Alves', 'julia.alves@email.com', 'senha789'),
    ('Pedro Rocha', 'pedro.rocha@email.com', 'senhaabc'),
    ('Camila Santos', 'camila.santos@email.com', 'senhaxyz');


INSERT INTO Carro (marca, modelo, ano, preco, idFuncionario) VALUES 
    ('Toyota', 'Corolla', 2022, 50000.00, 1),
    ('Honda', 'Civic', 2021, 48000.00, 2),
    ('Ford', 'Mustang', 2023, 60000.00, 3),
    ('Chevrolet', 'Camaro', 2022, 65000.00, 4),
    ('Volkswagen', 'Golf', 2020, 40000.00, 5),
    ('Nissan', 'Altima', 2023, 52000.00, 6),
    ('Mercedes-Benz', 'E-Class', 2021, 70000.00, 7),
    ('BMW', 'X5', 2022, 75000.00, 8),
    ('Audi', 'A4', 2020, 48000.00, 9),
    ('Hyundai', 'Elantra', 2023, 45000.00, 10);


INSERT INTO Cliente (nome, email, telefone, endereco, senhaCli) VALUES 
    ('Fernanda Lima', 'fernanda.lima@email.com', '123-456-7890', 'Rua A, 123', 'senha123'),
    ('Gabriel Oliveira', 'gabriel.oliveira@email.com', '987-654-3210', 'Avenida B, 456', 'senha456'),
    ('Mariana Costa', 'mariana.costa@email.com', '555-123-7890', 'Rua C, 789', 'senha789'),
    ('Rodrigo Santos', 'rodrigo.santos@email.com', '111-222-3333', 'Avenida D, 987', 'senhaabc'),
    ('Larissa Alves', 'larissa.alves@email.com', '444-555-6666', 'Rua E, 654', 'senhaxyz'),
    ('Thiago Pereira', 'thiago.pereira@email.com', '777-888-9999', 'Avenida F, 321', 'senha123'),
    ('Aline Souza', 'aline.souza@email.com', '222-333-4444', 'Rua G, 456', 'senha456'),
    ('Ricardo Lima', 'ricardo.lima@email.com', '666-777-8888', 'Avenida H, 789', 'senha789'),
    ('Vanessa Costa', 'vanessa.costa@email.com', '333-444-5555', 'Rua I, 987', 'senhaabc'),
    ('Marcos Santos', 'marcos.santos@email.com', '888-999-0000', 'Avenida J, 654', 'senhaxyz');

INSERT INTO Compra (idCarro, idCliente, dataCompra) VALUES 
    (1, 1, '2023-01-10'),
    (2, 2, '2023-02-15'),
    (3, 3, '2023-03-20'),
    (4, 4, '2023-04-25'),
    (5, 5, '2023-05-30'),
    (6, 6, '2023-06-05'),
    (7, 7, '2023-07-10'),
    (8, 8, '2023-08-15'),
    (9, 9, '2023-09-20'),
    (10, 10, '2023-10-25');

