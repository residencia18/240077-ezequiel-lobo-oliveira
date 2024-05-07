namespace TechMed.Core.Entities;

public class Exame : BaseEntity
{
    public int ExameId { get; set; }
    public DateTime DataHora { get; set; }
    public Decimal Valor { get; set; }
    public string? Local { get; set; }
    public string? ResultadoDescricao { get; set; }
    public int AtendimentoId {get; set;}
    public required Atendimento Atendimento {get; set;}
    

}
