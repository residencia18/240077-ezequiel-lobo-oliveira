namespace TechMed.Core.Entities;

public class Exame : BaseEntity
{
     public int ExameId {get; set;}
    public string? Local {get; set;}
    public DateTime DataHora {get; set;}
    public ICollection<Atendimento>? Atendimentos {get; set;}

}
