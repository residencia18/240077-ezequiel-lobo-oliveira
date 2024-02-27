// StudioConfigurations.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mvc.Models;

namespace Mvc.Data.Configurations
{
    public class StudioConfigurations : IEntityTypeConfiguration<Studio>
    {
        public void Configure(EntityTypeBuilder<Studio> builder)
        {
            builder.HasKey(s => s.StudioId);

           
            builder.HasMany(s => s.Movies)
                   .WithOne(m => m.Studio)
                   .HasForeignKey(m => m.StudioId);
                   
        }
    }
}
