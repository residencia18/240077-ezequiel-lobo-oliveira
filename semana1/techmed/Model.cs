using Microsoft.EntityFrameworkCore;

namespace techmed;

public class TechmedContext : DbContext
{
    protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder){
        base.OnConfiguring(optionsBuilder);
        var connectionString="server=localhost;user=root;passoword=12345";
        var serverVersion = ServerVersion.AutoDetect(connectionString);
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }
}
