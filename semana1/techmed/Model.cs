using Microsoft.EntityFrameworkCore;

namespace techmed;

public class TechmedContext : DbContext{
    public DbSet<Medico> Medicos {get; set;}
    public DbSet<Paciente> Pacientes{get; set;}
    protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder){
        base.OnConfiguring(optionsBuilder);
        var connectionString="server=localhost;Database=techmed;user=root;password=12345";
        var serverVersion = ServerVersion.AutoDetect(connectionString);
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Medico>().ToTable("Medicos").HasKey(m=>m.Id);
        modelBuilder.Entity<Paciente>().ToTable("Pacientes").HasKey(m=>m.Id);
    }
}
public abstract class Pessoa{
    public int Id { get; set;}
    public string Nome {get;set;}
    public string CPF {get;set;}

}
public class Medico : Pessoa{
  public string CRM {get; set;}
  public string Especialidade {get; set;}
  public float Salario {get; set;}
}

public class Paciente:Pessoa{

    public string Endereco {get; set;}
    public string Telefone {get; set;}


}