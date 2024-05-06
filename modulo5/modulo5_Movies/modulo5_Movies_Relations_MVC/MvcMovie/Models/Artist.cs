namespace Mvc.Models;

public class Artist
{
    public int ArtistId { get; set; }
    public  required string Name { get; set; }
    public string? Bio { get; set; }
    public string? Site { get; set; }
    public ICollection<Movie> Movies { get; set; } = new List<Movie>();
    
}
