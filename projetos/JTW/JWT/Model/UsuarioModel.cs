namespace JWT.Model;
using JWT.Enum;

public class UsuarioModel
{
    public int Id{get; set;}
    public CargoEnum Cargo{get; set;}
    public string Email{get; set;}
    public string Usuario {get; set;}
    public byte[] SenhaHash{get; set;}
    public byte[] SenhaSalt{get; set;}
    public DateTime TokenDataCriacao{get; set;} =DateTime.Now;
}

