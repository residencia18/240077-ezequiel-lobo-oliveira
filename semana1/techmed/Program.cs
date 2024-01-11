using techmed;
var context =new TechmedContext();
// context.Medicos.Add(new Medico{
//     Nome="g",
//     CPF ="2",
//     CRM = "2",
//     Especialidade="s",
//     Salario=3,
// });
//  context.SaveChanges();

context.Medicos.ToList().ForEach(m=> Console.WriteLine($"{m.Id}-{m.CRM}-{m.Nome}-{m.CPF}-{m.Salario}"));