namespace TechAdvocacia.Core.Entities;

public class Documento
{
    public int DocumentoId { get; set; }

   public int CasoJuridicoId { get; set; }
   public CasoJuridico CasoJuridico { get; set; } = null!;
}
