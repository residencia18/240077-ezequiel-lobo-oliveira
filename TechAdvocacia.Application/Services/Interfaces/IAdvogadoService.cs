namespace TechAdvocacia.Application.Services.Interfaces;
using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.ViewModels;
public interface IAdvogadoService
{
      public List<AdvogadoViewModel> GetAll();
      public AdvogadoViewModel? GetById(int id);
      public AdvogadoViewModel? GetByCrm(string crm);
      public int Create(NewAdvogadoInputModel medico);
      public int CreateAtendimento(int AdvogadoId,NewCasoJuridicoInputModel atendimento);
      public void Update(int id, NewAdvogadoInputModel medico);
      public void Delete(int id);
}
