using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using ResTIConnect.Infrastructure.Auth;

namespace ResTIConnect.Application.Services;
public class LoginService : ILoginService
{
    private readonly IAuthService _authService;
    public LoginService(IAuthService authService) {
        _authService = authService;
    }
    public LoginViewModel? Authenticate(NewLoginInputModel user)
    {
        var passHashed = _authService.ComputeSha256Hash(user.Password);
        var admHashed = _authService.ComputeSha256Hash("admin");

        if (user.Username == "admin" && passHashed == admHashed)
        {
            var token = _authService.GenerateJwtToken(user.Username, "admin");
            return new LoginViewModel
            {
                Username = user.Username,
                Token = token
            };
        }

        return null;
    }
}