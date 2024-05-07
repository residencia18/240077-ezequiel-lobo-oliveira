using OrdemDeServico.Application.InputModels;
using OrdemDeServico.Application.ViewModels;
using OrdemDeServico.Domain.Entities;

namespace OrdemDeServico.Application.Services.Interfaces
{
    public interface IUsuarioService : IBaseService<NewUsuarioInputModel, UsuarioViewModel>
    {
      
        int? Login(string email, string senha);
    }
}