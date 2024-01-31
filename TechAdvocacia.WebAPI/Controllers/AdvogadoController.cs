using Microsoft.AspNetCore.Mvc;
using TechAdvocacia.Application.ViewModels;
using TechAdvocacia.Application.InputModels;
using TechMed.Application.Services.Interfaces;
using System.Collections.Generic;
using TechAdvocacia.Application.Services.Interfaces;

namespace TechMed.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/v0.1/")]
    public class AdvogadoController : ControllerBase
    {
        private readonly IAdvogadoService _advogadoService;
        public List<AdvogadoViewModel> Advogados => _advogadoService.GetAll().ToList();
        public AdvogadoController(IAdvogadoService service) => _advogadoService = service;

        [HttpGet("advogados")]
        public ActionResult<List<AdvogadoViewModel>> GetAdvogados()
        {
            return Ok(Advogados);
        }

        [HttpGet("advogados/{id}")]
        public ActionResult<AdvogadoViewModel> GetAdvogado(int id)
        {
            var advogado = _advogadoService.GetById(id);
            if (advogado == null)
            {
                return NotFound();
            }
            return Ok(advogado);
        }

        [HttpPost("advogados")]
        public ActionResult CreateAdvogado([FromBody] NewAdvogadoInputModel newAdvogado)
        {
            var advogadoId = _advogadoService.Create(newAdvogado);
            return CreatedAtAction(nameof(GetAdvogado), new { id = advogadoId }, newAdvogado);
        }
    }
}