namespace Mvc.Models;

public class Studio
{
    public int StudioId { get; set; }
    public required string Name { get; set; }
    public string? Site { get; set; }
    public ICollection<Movie> Movies { get; set; }
    
}
