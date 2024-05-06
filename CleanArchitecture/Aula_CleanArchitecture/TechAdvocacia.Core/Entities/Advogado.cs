namespace TechAdvocacia.Core.Entities;

public class Advogado : Pessoa
{
    public int AdvogadoId{get; set;}
    public ICollection<CasoJuridico>? CasosJuridicos {get;}

}
