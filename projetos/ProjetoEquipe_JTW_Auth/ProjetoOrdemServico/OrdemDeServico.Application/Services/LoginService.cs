using Microsoft.EntityFrameworkCore;
using OrdemDeServico.Application.InputModels;
using OrdemDeServico.Application.Services.Interfaces;
using OrdemDeServico.Domain.Entities;
using OrdemDeServico.Infrastructure.Auth;
using OrdemDeServico.Infrastructure.Persistence;

namespace OrdemDeServico.Application.Services
{
    public class LoginService : ILoginService
    {
        private readonly IAuthService _authService;
        private readonly OrdemDeServicoContext _dbContext;

        public LoginService(IAuthService authService, OrdemDeServicoContext dbContext)
        {
            _authService = authService;
            _dbContext = dbContext;
        }

        public LoginViewModel? Authenticate(LoginInputModel user)
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