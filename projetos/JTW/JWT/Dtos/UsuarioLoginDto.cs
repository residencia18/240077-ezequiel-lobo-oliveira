using System.ComponentModel.DataAnnotations;

namespace JWT.Dtos
{
    public class UsuarioLoginDto
    {
        [Required(ErrorMessage = "O campo email é obrigatório"), EmailAddress(ErrorMessage = "Email inválido!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "O campo senha é obrigatória")]
        public string Senha { get; set; }
    }
}