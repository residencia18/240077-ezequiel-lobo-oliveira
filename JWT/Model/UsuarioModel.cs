namespace JWT.Model;

public class UsuarioModel
{
    public int id(get; set;)
    public CargoEnum Cargo(get; set;)
    public string Email(get; set;)
    public string Usuario (get; set;)
    public byteHash(get;set)
    public byte SenhaSalt(get;set)
    public Datetime TokenDataCriacao(get; set;) =DateTime.Now;
}
