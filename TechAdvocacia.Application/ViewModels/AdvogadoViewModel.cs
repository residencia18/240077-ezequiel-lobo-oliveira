namespace TechMed.Application.ViewModels
{
   public class CasoJuridicoViewModel
   {
      public int CasoJuridicoId { get; set; }
      public DateTime DataHora { get; set; }
      public ClienteViewModel Cliente { get; set; } = null!;
      public AdvogadoViewModel Advogado { get; set; } = null!;
   }
}
