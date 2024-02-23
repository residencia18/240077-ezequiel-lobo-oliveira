using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using JWT.Dtos;

namespace JWT.Controller;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult>Resister( UsuarioCriacaoDto usuarioRegister){
        return Ok();
    }
}
