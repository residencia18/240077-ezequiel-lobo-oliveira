using TechAdvocacia.Application.Services.Interfaces;
using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.ViewModels;
using TechAdvocacia.Infrastructure.Persistence.Interfaces;
using TechAdvocacia.Core.Entities;

namespace TechAdvocacia.Application.Services;
public class AdvogadoService : IAdvogadoService
{
    public int Create(NewAdvogadoInputModel medico)
    {
        throw new NotImplementedException();
    }

    public int CreateAtendimento(int AdvogadoId, NewCasoJuridicoInputModel atendimento)
    {
        throw new NotImplementedException();
    }

    public void Delete(int id)
    {
        throw new NotImplementedException();
    }

    public List<AdvogadoViewModel> GetAll()
    {
        throw new NotImplementedException();
    }

    public AdvogadoViewModel? GetByCrm(string crm)
    {
        throw new NotImplementedException();
    }

    public AdvogadoViewModel? GetById(int id)
    {
        throw new NotImplementedException();
    }

    public void Update(int id, NewAdvogadoInputModel medico)
    {
        throw new NotImplementedException();
    }
}