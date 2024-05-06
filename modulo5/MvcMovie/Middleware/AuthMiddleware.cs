using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Mvc.Middlewares
{
    public class AuthMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
         var path = context.Request.Path;
            if (path.StartsWithSegments("/Login") || path.StartsWithSegments("/Home"))
            {
                await _next(context);
                return;
            }


            if (!context.Request.Headers.ContainsKey("Authorization"))
            {
                context.Response.StatusCode = 401; 
                await context.Response.WriteAsync("Authorization header is missing.");
                return;
            }

            var token = context.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");

            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(token);

                var emailClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == "email");
                var roleClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.Role);

                if (emailClaim == null || roleClaim == null)
                {
                    context.Response.StatusCode = 401; // Unauthorized
                    await context.Response.WriteAsync("Invalid token claims.");
                    return;
                }

                
                if (roleClaim.Value != "Admin" && context.Request.Path.StartsWithSegments("/admin"))
                {
                    context.Response.StatusCode = 403;
                    await context.Response.WriteAsync("You don't have permission to access this resource.");
                    return;
                }

                await _next(context);
            }
            catch (Exception ex)
            {
                context.Response.StatusCode = 401; 
                await context.Response.WriteAsync("Invalid token: " + ex.Message);
            }
        }
    }
}
