using Microsoft.EntityFrameworkCore;

namespace techmed;

public class TechmedContext : DbContext
{
    public DbSet<Medico> Medicos { get; set; }
    public DbSet<Paciente> Pacientes { get; set; }
    public DbSet<Atendimentos> Atendimentos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        var connectionString = "server=localhost;Database=techmed;user=root;password=12345";
        var serverVersion = ServerVersion.AutoDetect(connectionString);
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Medico>().ToTable("Medicos").HasKey(m => m.Id);
        modelBuilder.Entity<Paciente>().ToTable("Pacientes").HasKey(m => m.Id);
        modelBuilder.Entity<Atendimentos>().ToTable("Atendimentos").HasKey(a => a.Id);

        modelBuilder.Entity<Atendimentos>()
            .HasOne(a => a.Medico)
            .WithMany(m => m.Atendimentos)
            .HasForeignKey(a => a.MedicoId);

        modelBuilder.Entity<Atendimentos>()
            .HasOne(a => a.Paciente)
            .WithMany(p => p.Atendimentos)
            .HasForeignKey(a => a.PacienteId);
    }
}

public abstract class Pessoa
{
    public int Id { get; set; }
    public required string Nome { get; set; }
    public required string CPF { get; set; }
}

public class Medico : Pessoa
{
    public required string CRM { get; set; }
    public required string Especialidade { get; set; }
    public float Salario { get; set; }
    public List<Atendimentos> Atendimentos { get; set; }
}

public class Paciente : Pessoa
{
    public required string Endereco { get; set; }
    public required string Telefone { get; set; }
    public List<Atendimentos> Atendimentos { get; set; }
}

public class Atendimentos
{
    public int Id { get; set; }
    public DateTime DataHora { get; set; }
    public int MedicoId { get; set; }
    public Medico Medico { get; set; }
    public int PacienteId { get; set; }
    public Paciente Paciente { get; set; }
}