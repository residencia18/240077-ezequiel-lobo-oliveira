using Microsoft.EntityFrameworkCore;
using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using ResTIConnect.Domain.Entities;
using ResTIConnect.Infrastructure.Auth;
using ResTIConnect.Infrastructure.Context;

namespace ResTIConnect.Application.Services
{
    public class LoginService : ILoginService
    {
        private readonly IAuthService _authService;
        private readonly ResTIConnectDbContext _dbContext;

        public LoginService(IAuthService authService, ResTIConnectDbContext dbContext)
        {
            _authService = authService;
            _dbContext = dbContext;
        }

        public LoginViewModel? Authenticate(NewLoginInputModel user)
        {
            
            var userFromDb = _dbContext.Usuarios.FirstOrDefault(u => u.Email == user.Email);

           
            if (userFromDb == null || userFromDb.Senha != _authService.ComputeSha256Hash(user.Senha))
            {
                return null;
            }

           
            string defaultRole = "user";

            
            var token = _authService.GenerateJwtToken(user.Email, defaultRole);
            
           
            return new LoginViewModel
            {
                Username = user.Email,
                Token = token
            };
        }
    }
}
