using Microsoft.EntityFrameworkCore;
using TechAdvocacia.Infrastructure.Persistence.Interfaces;
using TechAdvocacia.Core.Entities;

namespace TechAdvocacia.Infrastructure.Persistence
{
   public class TechAdvocaciaContext : DbContext, ITechAdvocaciaContext
   {
      public DbSet<Advogado> Advogados { get; set; }

      public TechAdvocaciaContext(DbContextOptions<TechAdvocaciaContext> options) : base(options)
      {
      }
   }
}