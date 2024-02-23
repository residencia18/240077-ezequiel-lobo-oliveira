using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using JWT.Dtos;
using JWT.Services.AuthServices;


namespace JWT.Controller;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthInterface _authService;
    public AuthController(IAuthInterface authService)
    {
        _authService = authService;
    }

    [HttpPost]
    public async Task<ActionResult>Resister( UsuarioCriacaoDto usuarioRegister){
        var resposta= await _authService.Resgistrar(usuarioRegister);
        return Ok();
    }
}
