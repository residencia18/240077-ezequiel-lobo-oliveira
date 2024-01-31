using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechAdvocacia.Core.Entities;
namespace TechAdvocacia.Infrastructure.Persistence.Configurations;
public class CasoJuridicoConfigurations : IEntityTypeConfiguration<CasoJuridico>
{
   public void Configure(EntityTypeBuilder<CasoJuridico> builder)
   {
      builder
         .ToTable("CasosJuridicos")
         .HasKey(m => m.CasoJuridicoId);

      builder
         .HasOne(m => m.Advogado)
         .WithMany(m => m.CasosJuridicos)
         .HasForeignKey(m => m.AdvogadoId);

      builder
         .HasOne(m => m.Cliente)
         .WithMany(m => m.CasosJuridicos)
         .HasForeignKey(m => m.ClienteId);
   }
}
