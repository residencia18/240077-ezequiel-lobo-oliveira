using System.ComponentModel.DataAnnotations;
using JWT.Enum;

namespace JWT.Dtos;

public class UsuarioCriacao
{
    [Required(ErrorMessage = "O campo usuario é obrigatório")]
    public string Usuario { get; set; }
    [Required(ErrorMessage = "O campo email é obrigatório"), EmailAddress(ErrorMessage = "O campo email é inválido")]
    public string Email { get; set; }
    [Required(ErrorMessage = "O campo senha é obrigatório")]
    public string Senha { get; set; }
    [Compare("Senha", ErrorMessage = "As senhas não conferem")]
    public string ConfirmarSenha { get; set; }
    [Required(ErrorMessage = "O campo cargo é obrigatório")]
    public CargoEnum Cargo { get; set; }
}
