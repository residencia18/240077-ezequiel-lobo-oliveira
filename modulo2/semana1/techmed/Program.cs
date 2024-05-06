using System.ComponentModel.DataAnnotations;
using techmed;
var context =new TechmedContext();

    // Cria um novo paciente
    context.Pacientes.Add(new Paciente{
        Nome = "Nome do Paciente",
        CPF = "123.456.789-00",
        Endereco = "Endereço do Paciente",
        Telefone = "1111-2222",
    });
    context.SaveChanges();

// context.Medicos.Add(new Medico{
//     Nome="g",
//     CPF ="2",
//     CRM = "2",
//     Especialidade="s",
//     Salario=3,
// });
//  context.SaveChanges();


Console.WriteLine("Medicos:");
context.Medicos.ToList().ForEach(m=> Console.WriteLine($"{m.Id}-{m.CRM}-{m.Nome}-{m.CPF}-{m.Salario}"));
Console.WriteLine("Pacientes:");
context.Pacientes.ToList().ForEach(m=> Console.WriteLine($"{m.Id}-{m.CPF}-{m.Nome}-{m.Endereco}-{m.Telefone}"));