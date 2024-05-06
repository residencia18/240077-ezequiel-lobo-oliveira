using Microsoft.EntityFrameworkCore;
using Mvc.Models; 
namespace Mvc.Data
{
    public class MvcContext : DbContext
    { 
        public DbSet<Movie> Movies { get; set; }
        public DbSet<User> Users { get; set; } 
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Studio> Studios { get; set; }

        public MvcContext(DbContextOptions<MvcContext> dbContextOptions) : base(dbContextOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(MvcContext).Assembly);
        }

       
    }
}
