using ResTIConnect.Application.InputModels;
using ResTIConnect.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace ResTIConnect.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/v0.1/")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpGet("usuarios")]
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
        public IActionResult GetUsuariosByPerfilId(int perfilId)
        {
            var usuarios = _usuarioService.GetByPerfilId(perfilId);
            return Ok(usuarios);
        }

        [HttpGet("usuario/endereco/{estado}")]
        public IActionResult GetUsuariosByEstado(string estado)
        {
            var usuarios = _usuarioService.GetByEstado(estado);
            return Ok(usuarios);
        }

        [HttpPost("usuario")]
        public IActionResult CreateUsuario([FromBody] NewUsuarioInputModel usuario)
        {
            var usuarioId = _usuarioService.Create(usuario);
            return CreatedAtAction(nameof(GetUsuarioById), new { id = usuarioId }, usuario);
        }

        [HttpPut("usuario/{id}")]
        public IActionResult UpdateUsuario(int id, [FromBody] NewUsuarioInputModel usuario)
        {
            if (_usuarioService.GetById(id) == null)
                return NotFound();

            _usuarioService.Update(id, usuario);
            return Ok(_usuarioService.GetById(id));
        }

        [HttpDelete("usuario/{id}")]
        public IActionResult DeleteUsuario(int id)
        {
            if (_usuarioService.GetById(id) == null)
                return NotFound();

            _usuarioService.Delete(id);
            return NoContent();
        }

        [HttpPost("login")]
        
        public IActionResult Login([FromBody] NewLoginInputModel loginInput)
        {
            try
            {
                var usuarioId = _usuarioService.Login(loginInput.Email, loginInput.Senha);

                if (usuarioId != null)
                {
                    return Ok(new { UsuarioId = usuarioId });
                }
                else
                {
                    return Unauthorized("Credenciais inválidas");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno do servidor: {ex.Message}");
            }
        }

    }
}
