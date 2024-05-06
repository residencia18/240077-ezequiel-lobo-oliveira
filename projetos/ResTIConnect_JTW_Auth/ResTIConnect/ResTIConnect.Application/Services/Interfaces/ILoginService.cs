using ResTIConnect.Application.InputModels;

namespace ResTIConnect.Application.Services.Interfaces;
public interface ILoginService
{
    LoginViewModel? Authenticate(NewLoginInputModel user);
}