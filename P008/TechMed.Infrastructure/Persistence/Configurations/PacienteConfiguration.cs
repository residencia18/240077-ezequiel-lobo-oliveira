using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechMed.Core.Entities;

namespace TechMed.Infrastructure.Persistence.Configurations;
public class PacienteConfigurations 
{
   public void Configure(EntityTypeBuilder<Paciente> builder)
   {
      
      builder
         .ToTable("Pacientes")
         .HasKey(m => m.PacienteId);
   }
}