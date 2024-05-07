using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Mvc.Models;

namespace Mvc.Data.Configurations
{
    public class ArtistConfigurations : IEntityTypeConfiguration<Artist>
    {
        public void Configure(EntityTypeBuilder<Artist> builder)
        {
            builder.HasKey(a => a.ArtistId);

            builder
                .HasMany(a => a.Movies)
                .WithMany(m => m.Artists)
                .UsingEntity(j =>
                {
                    j.ToTable("MovieArtists"); 
                    j.HasOne(typeof(Artist)).WithMany().HasForeignKey("ArtistId").OnDelete(DeleteBehavior.Cascade); 
                    j.HasOne(typeof(Movie)).WithMany().HasForeignKey("MovieId").OnDelete(DeleteBehavior.Cascade); 
                });
        }
    }
}
