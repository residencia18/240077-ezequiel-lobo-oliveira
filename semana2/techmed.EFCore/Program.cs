using techmed.Domain.Entities;

using TechMed.Infra.Data.Context;

var context = new TechMedContext();





Console.WriteLine("Criar um médico no banco de dados");

var medico = new Medico{
    Nome = "Dr. Dexter",
    CPF = "123.456.789-00",
    CRM = "123456",
    Especialidade = "Clínico Geral",
    Salario = 10000
};

context.Medicos.Add(medico);
context.SaveChanges();





Console.WriteLine($"Finalizando o programa");


