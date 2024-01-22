using Microsoft.EntityFrameworkCore;
using techmed.Domain.Entities;

namespace TechMed.Infra.Data.Context;
public class TechMedContext : DbContext
{

    public DbSet<Medico> Medicos { get; set; }
    public DbSet<Paciente> Pacientes { get; set; }
    public DbSet<Atendimento> Atendimentos { get; set; }
    public DbSet<Exame> Exames { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        var connectionString = "server=localhost;user=root;password=12345;database=techmed";
        var serverVersion = ServerVersion.AutoDetect(connectionString);
        
        optionsBuilder.UseMySql(connectionString, serverVersion);
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Medico>().ToTable("Medicos").HasKey(m => m.MedicoId);
        modelBuilder.Entity<Paciente>().ToTable("Pacientes").HasKey(p => p.PacienteId);
        modelBuilder.Entity<Atendimento>().ToTable("Atendimentos").HasKey(a => a.AtendimentoId);
        modelBuilder.Entity<Exame>().ToTable("Exames").HasKey(a => a.ExameId);

        modelBuilder.Entity<Atendimento>()
            .HasOne(a => a.Medico)
            .WithMany(m => m.Atendimentos)
            .HasForeignKey(a => a.MedicoId);

        modelBuilder.Entity<Atendimento>()
            .HasOne(a => a.Paciente)
            .WithMany(m => m.Atendimentos)
            .HasForeignKey(a => a.MedicoId);

        modelBuilder.Entity<Atendimento>()
            .HasMany(a => a.Exames)
            .WithMany(e => e.Atendimentos);
    }

    
    
}
