using Microsoft.AspNetCore.Mvc;
using OrdemDeServico.Application.InputModels;
using OrdemDeServico.Application.Services.Interfaces;
using OrdemDeServico.Application.ViewModels;
using OrdemDeServico.Domain.Exceptions;

namespace OrdemDeServico.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        private readonly ILoginService _loginService;

        public UsuarioController(IUsuarioService usuarioService, ILoginService loginService)
        {
            _usuarioService = usuarioService;
            _loginService = loginService;
        }

        [HttpGet]
        public IActionResult GetAllUsuarios()
        {
            var usuarios = _usuarioService.GetAll();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public IActionResult GetUsuarioById(int id)
        {
            var usuario = _usuarioService.GetById(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return Ok(usuario);
        }

        [HttpPost]
        public IActionResult CreateUsuario(NewUsuarioInputModel novoUsuario)
        {
            var usuarioId = _usuarioService.Create(novoUsuario);
            return CreatedAtAction(nameof(GetUsuarioById), new { id = usuarioId }, novoUsuario);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUsuario(int id, NewUsuarioInputModel usuarioAtualizado)
        {
            try
            {
                _usuarioService.Update(id, usuarioAtualizado);
                return NoContent();
            }
            catch (UsuarioNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUsuario(int id)
        {
            try
            {
                _usuarioService.Delete(id);
                return NoContent();
            }
            catch (UsuarioNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpPost("login")]
        public IActionResult Post([FromBody] LoginInputModel login)
        {
            var result = _loginService.Authenticate(login);
            if (result is not null)
                return Ok(result);
            else
                return BadRequest("Usuário ou senha inválidos");
        }
    }
}
