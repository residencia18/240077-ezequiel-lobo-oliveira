using System.ComponentModel.DataAnnotations;

namespace Mvc.Models;

public class Movie
{
    public int MovieId { get; set; }
    
    [Required(ErrorMessage = "O campo título é obrigatório.")]
    public string? Title { get; set; }

    [DataType(DataType.Date)]
    public DateTime ReleaseDate { get; set; }
    public string? Genre { get; set; }
    public decimal Price { get; set; }
    public int StudioId { get; set; }
    public ICollection<Artist> Artists { get; set; } = new List<Artist>();
    public required Studio Studio { get; set; }
}
