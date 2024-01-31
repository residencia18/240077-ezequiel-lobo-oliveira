using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.ViewModels;

namespace TechAdvocacia.Application.Services.Interfaces;
public interface ICasoJuridicoService
{
   public List<CasoJuridicoViewModel> GetAll();
   public CasoJuridicoViewModel? GetById(int id);
   public List<CasoJuridicoViewModel> GetByPacienteId(int ClienteId);
   public List<CasoJuridicoViewModel> GetByMedicoId(int AdvogadoId);
   public int Create(NewCasoJuridicoInputModel CasoJuridico);
}
