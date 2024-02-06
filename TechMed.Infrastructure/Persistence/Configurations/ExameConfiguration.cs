using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechMed.Core.Entities;

public class ExameConfiguration : IEntityTypeConfiguration<Exame>
{
    public void Configure(EntityTypeBuilder<Exame> builder)
    {
        builder.HasKey(d => d.ExameId);

       
    }
}