using JWT.Model;
using Microsoft.EntityFrameworkCore;


namespace WT.Model;

public class AppDbContext : DbContext
{
    
    public DbSet<UsuarioModel> Usuarios { get; set; }
    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        var connectionString = "server=localhost;user=root;password=12345;database=jwt";
        var serverVersion = ServerVersion.AutoDetect(connectionString);

        optionsBuilder.UseMySql(connectionString, serverVersion);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        
        modelBuilder.Entity<UsuarioModel>().ToTable("Usuarios").HasKey(s => s.Id);
        

      
    }
}