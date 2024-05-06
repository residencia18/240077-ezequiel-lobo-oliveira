using Microsoft.AspNetCore.Http;
using ResTIConnect.Application.Auth;
using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using System;
using System.Text;
using System.Threading.Tasks;

namespace ResTIConnect.Application.Auth
{
    public class SimpleAuthHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILoginService _loginService;

        public SimpleAuthHandler(RequestDelegate next, ILoginService loginService)
        {
            _next = next;
            _loginService = loginService;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Verifica se existe a chave Authorization no Header da requisição
            if (!context.Request.Headers.ContainsKey("Authorization"))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Authorization header is missing");
                return;
            }

            
            var header = context.Request.Headers["Authorization"].ToString();
            var encodedToken = header.Substring(7); 

            
            var decodedToken = Encoding.UTF8.GetString(Convert.FromBase64String(encodedToken));
            var credentials = decodedToken.Split(":");

            
            var email = credentials[0];
            var senha = credentials[1];

            
            var loginInputModel = new NewLoginInputModel
            {
                Email = email,
                Senha = senha
            };

            
            var loginViewModel = _loginService.Authenticate(loginInputModel);

           
            if (loginViewModel == null)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Invalid email or password");
                return;
            }

            
            await _next(context);
        }
    }
}
