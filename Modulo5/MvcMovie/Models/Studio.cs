using System.ComponentModel.DataAnnotations;

namespace Mvc.Models;

public class Studio
{
    public int StudioId { get; set; }
    
    [Required(ErrorMessage = "O campo nome é obrigatório.")]
    public required string Name { get; set; }
    public string? Site { get; set; }
    public ICollection<Movie>? Movies { get; set; }
    
}
