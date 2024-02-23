using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Mvc.Models;

namespace Mvc.Data
{
    public class MvcContext : DbContext
    {
        public MvcContext (DbContextOptions<MvcContext> options)
            : base(options)
        {
        }

        public DbSet<Mvc.Models.Movie> Movie { get; set; } = default!;

        public DbSet<Mvc.Models.User> User { get; set; } = default!;
    }
}