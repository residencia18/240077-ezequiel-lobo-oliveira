using Cepedi.BancoCentral.Domain.Entities;
using Cepedi.BancoCentral.Domain.Repository;
using Cepedi.BancoCentral.Shareable.Requests;

using MediatR;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;

namespace Cepedi.BancoCentral.Domain
{
    public class ExcluirUsuarioRequestHandler : IRequestHandler<ExcluirUsuarioRequest, Unit>
    {
        private readonly ILogger<ExcluirUsuarioRequestHandler> _logger;
        private readonly IUsuarioRepository _usuarioRepository;

        public ExcluirUsuarioRequestHandler(IUsuarioRepository usuarioRepository, ILogger<ExcluirUsuarioRequestHandler> logger)
        {
            _usuarioRepository = usuarioRepository;
            _logger = logger;
        }

        public async Task<Unit> Handle(ExcluirUsuarioRequest request, CancellationToken cancellationToken)
        {
            var usuario = await _usuarioRepository.ExcluirUsuarioAsync(request.IdUsuario);
            if (usuario == null)
            {
                _logger.LogWarning("Usuário não encontrado para exclusão.");
            }
            return Unit.Value;
        }
    }
}
