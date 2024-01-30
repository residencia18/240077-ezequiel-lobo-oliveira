namespace TechAdvocacia.Core.Entities;

public class CasoJuridico
{
    public int CasoJuridicoId { get; set; }
    public int ClienteId { get; set; }
    public required Cliente Cliente { get; set; }
    public int AdvogadoId { get; set; }
    public required Advogado Advogado {get; set;}
    public ICollection<Documento>? Documentos { get; set; }

}
