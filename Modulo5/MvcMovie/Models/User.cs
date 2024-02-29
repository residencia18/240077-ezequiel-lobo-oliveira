using System.ComponentModel.DataAnnotations;

namespace Mvc.Models;
public class User
{
    public int UserId { get; set; }

    [Required(ErrorMessage = "O campo nome é obrigatório.")]
    public required string Name { get; set; }
    
    [Required(ErrorMessage = "O campo email é obrigatório.")]
    [EmailAddress(ErrorMessage = "Formato de email inválido.")]
    public required string Email { get; set; }

    [Required(ErrorMessage = "O campo senha é obrigatório.")]
    public required string Password { get; set; }
    
    public required string Role { get; set; }
}