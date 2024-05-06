using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechMed.Core.Entities;

namespace TechMed.Infrastructure.Persistence.Configurations;
public class MedicoConfigurations
{
    public void Configure(EntityTypeBuilder<Medico> builder)
    {
        builder.ToTable("medicos").HasKey(a => a.MedicoId);
    }
}