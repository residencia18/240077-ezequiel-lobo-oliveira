using Microsoft.EntityFrameworkCore;
using ResTIConnect.Domain.Entities;

namespace ResTIConnect.Infrastructure;

public class ResTIConnectContext : DbContext
{
    public DbSet<Prestador_De_Servico> PrestadoresDeServico { get; set; }
    public DbSet<Endereco> Enderecos { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        var connectionString = "server=localhost;user=root;password=12345;database=OrdemDeServico";
        var serverVersion = ServerVersion.AutoDetect(connectionString);

        optionsBuilder.UseMySql(connectionString, serverVersion);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Prestador_De_Servico>().ToTable("Prestador_De_Servicos").HasKey(l => l.Prestador_De_ServicoId);
        modelBuilder.Entity<Endereco>().ToTable("Enderecos").HasKey(l => l.EnderecoId);


        modelBuilder.Entity<Prestador_De_Servico>()
                .HasOne(p => p.Endereco)
                .WithOne()
                .HasForeignKey<Prestador_De_Servico>(p => p.EnderecoId);
    }
}