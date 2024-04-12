using MediatR;

namespace Cepedi.BancoCentral.Shareable.Requests
{
    public class ExcluirUsuarioRequest : IRequest<Unit>
    {
        public int IdUsuario { get; set; }
    }
}
