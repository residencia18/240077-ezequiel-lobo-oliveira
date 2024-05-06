using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ResTIConnect.Domain.Entities;
using ResTIConnect.Infrastructure.Context;

namespace ResTIConnect.Infrastructure.Auth
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _configuration;
        private readonly ResTIConnectDbContext _dbContext; 

        
        public AuthService(IConfiguration configuration, ResTIConnectDbContext dbContext)
        {
            _configuration = configuration;
            _dbContext = dbContext;
        }

        
        public string ComputeSha256Hash(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                var hash = BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
                return hash;
            }
        }

        
        public string GenerateJwtToken(string username, string role)
        {
            
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var key = _configuration["Jwt:Key"] ?? "";

            
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));

            
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            
            var claims = new[]
            {
                new Claim("username", username),
                new Claim(ClaimTypes.Role, role)
            };

            
            var token = new JwtSecurityToken(
               issuer: issuer,
               audience: audience,
               claims: claims,
               expires: DateTime.Now.AddMinutes(30), 
               signingCredentials: credentials
            );

            
            var tokenHandler = new JwtSecurityTokenHandler();

            
            var stringToken = tokenHandler.WriteToken(token);

            return stringToken;
        }

      

         
    }
}
