using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.ViewModels;
using ResTIConnect.Domain.Entities;

namespace ResTIConnect.Application.Services.Interfaces
{
    public interface IPerfilService : IBaseService<NewPerfilInputModel, PerfilViewModel, Perfil>
    {
        List<PerfilViewModel> GetByUserId(int userId);
    }
}
