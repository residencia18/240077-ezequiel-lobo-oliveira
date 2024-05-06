using System.ComponentModel.DataAnnotations;

namespace Mvc.Models;

public class Login
{
    [Required(ErrorMessage = "O campo email é obrigatório.")]
    
    public required string Email { get; set; }
    [Required(ErrorMessage = "O campo senha é obrigatório.")]
    public required string Password { get; set; }
}