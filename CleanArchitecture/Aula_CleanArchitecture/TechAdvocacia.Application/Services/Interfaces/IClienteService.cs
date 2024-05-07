using TechAdvocacia.Application.InputModels;
using TechAdvocacia.Application.ViewModels;

namespace TechAdvocacia.Application.Services.Interfaces;
public interface IClienteService
{
    public int Create(NewClienteInputModel client);
    public void Update(int id, NewClienteInputModel client);
    public void Delete(int id);
    public ClienteViewModel GetById(int id);
    public List<ClienteViewModel> GetAll();
}