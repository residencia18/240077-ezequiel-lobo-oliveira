using Cepedi.BancoCentral.Shareable.Responses;
using MediatR;

namespace Cepedi.BancoCentral.Shareable.Requests;
public class AtualizarUsuarioRequest : IRequest<AtualizarUsuarioResponse>
{
    public int IdUsuario { get; set; }
    public string Nome { get; set; } = default!;

    public DateTime DataNascimento { get; set; }

    public string Cpf { get; set; } = default!;

    public string Celular { get; set; } = default!;
    public bool CelularValidado { get; set; }

    public string Email { get; set; } = default!;
}