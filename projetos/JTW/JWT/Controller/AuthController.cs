using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using JWT.Dtos;
using JWT.Services.AuthService;


namespace JWT.Controller;
  [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthInterface _authInterface;
        public AuthController(IAuthInterface authInterface)
        {
                _authInterface = authInterface;
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login(UsuarioLoginDto usuarioLogin)
        {

            var resposta = await _authInterface.Login(usuarioLogin); 
            return Ok(resposta);
        }


        [HttpPost("register")]
        public async Task<ActionResult> Register(UsuarioCriacaoDto usuarioRegister)
        {

            var resposta = await _authInterface.Registrar(usuarioRegister);
            return Ok(resposta);
        }

    }