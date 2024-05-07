using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrdemDeServico.Domain.Entities;

namespace OrdemDeServico.Infrastructure;

public class UsuarioConfigurations : IEntityTypeConfiguration<Usuario>
{
    public void Configure(EntityTypeBuilder<Usuario> builder)
    {
        builder.ToTable("usuarios").HasKey(u => u.UsuarioId);

         }
}