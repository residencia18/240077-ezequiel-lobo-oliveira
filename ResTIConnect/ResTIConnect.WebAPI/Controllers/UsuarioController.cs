using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace ResTIConnect.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/v0.1/")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        private readonly ILoginService _loginService;
        

        public UsuarioController(IUsuarioService usuarioService, ILoginService loginService)
        {
            _usuarioService = usuarioService;
            _loginService = loginService;
    
        }

        

        [HttpGet("usuarios")]
        [Authorize]
        
        public IActionResult GetAllUsuarios()
        {
            var usuarios = _usuarioService.GetAll();
            return Ok(usuarios);
        }

        [HttpGet("usuario/{id}")]
        public IActionResult GetUsuarioById(int id)
        {
            var usuario = _usuarioService.GetById(id);
            return Ok(usuario);
        }

        [HttpGet("usuario/perfil/{perfilId}")]
        [Authorize]
        public IActionResult GetUsuariosByPerfilId(int perfilId)
        {
            var usuarios = _usuarioService.GetByPerfilId(perfilId);
            return Ok(usuarios);
        }

        [HttpGet("usuario/endereco/{estado}")]
        [Authorize]
        public IActionResult GetUsuariosByEstado(string estado)
        {
            var usuarios = _usuarioService.GetByEstado(estado);
            return Ok(usuarios);
        }

        [HttpPost("usuario")]
        [Authorize]
        public IActionResult CreateUsuario([FromBody] NewUsuarioInputModel usuario)
        {
            var usuarioId = _usuarioService.Create(usuario);
            return CreatedAtAction(nameof(GetUsuarioById), new { id = usuarioId }, usuario);
        }

        [HttpPut("usuario/{id}")]
        [Authorize]
        public IActionResult UpdateUsuario(int id, [FromBody] NewUsuarioInputModel usuario)
        {
            if (_usuarioService.GetById(id) == null)
                return NotFound();

            _usuarioService.Update(id, usuario);
            return Ok(_usuarioService.GetById(id));
        }

        [HttpDelete("usuario/{id}")]
        [Authorize]
        public IActionResult DeleteUsuario(int id)
        {
            if (_usuarioService.GetById(id) == null)
                return NotFound();

            _usuarioService.Delete(id);
            return NoContent();
        }

        [HttpPost("login")]
    public IActionResult Login([FromBody] NewLoginInputModel user)
    {
        var userViewModel = _loginService.Authenticate(user);
        if (userViewModel is null)
        {
            return Unauthorized();
        }
        return Ok(userViewModel);
    }

        

    }
}
