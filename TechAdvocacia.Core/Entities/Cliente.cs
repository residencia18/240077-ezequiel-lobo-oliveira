namespace TechAdvocacia.Core.Entities;

public class Cliente: Pessoa{
   public int ClienteId {get; set;}
   public ICollection<CasoJuridico>? CasosJuridicos {get;}


}
