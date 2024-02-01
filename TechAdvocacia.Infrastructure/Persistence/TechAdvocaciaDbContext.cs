using Microsoft.EntityFrameworkCore;
using TechAdvocacia.Core.Entities;
using TechAdvocacia.Infrastructure.Persistence.Interfaces;
namespace TechAdvocacia.Infrastructure.Persistence;

public class TechAdvocaciaDbContext : DbContext , ITechAdvocaciaContext
{
   public DbSet<Advogado> Advogados { get; set; }
   public DbSet<Cliente> Clientes { get; set; }
   public DbSet<CasoJuridico> CasosJuridicos { get; set; }
   public DbSet<Documento> Documentos { get; set; }

   public TechAdvocaciaDbContext(DbContextOptions<TechAdvocaciaDbContext> options) : base(options)
   {
     
   }

   protected override void OnModelCreating(ModelBuilder modelBuilder)
   {
      base.OnModelCreating(modelBuilder);

      modelBuilder.ApplyConfigurationsFromAssembly(typeof(TechAdvocaciaDbContext).Assembly);
   }
}
