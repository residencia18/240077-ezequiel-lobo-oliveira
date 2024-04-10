using Cepedi.Domain.Services;
using Cepedi.Shareable.Requests;
using Cepedi.Shareable.Responses;
using MediatR;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cepedi.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CursoController : ControllerBase
    {
        private readonly ILogger<CursoController> _logger;
        private readonly IMediator _mediator;

        public CursoController(ILogger<CursoController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<ObtemCursoResponse>> CadastrarCursoAsync([FromBody] CadastraCursoRequest request)
        {
            try
            {
                var response = await _mediator.Send(request);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocorreu um erro ao cadastrar o curso.");
                return StatusCode(500, "Ocorreu um erro interno ao processar a requisição.");
            }
        }
    }
}
