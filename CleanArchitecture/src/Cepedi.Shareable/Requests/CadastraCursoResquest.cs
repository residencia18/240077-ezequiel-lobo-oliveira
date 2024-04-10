namespace Cepedi.Shareable.Requests;
using Cepedi.Shareable.Responses;
using MediatR;

public record CadastraCursoRequest(string nome, string descricao, DateTime inicio, DateTime fim, int professorId);
namespace Cepedi.Shareable.Requests;

public class CadastraCursoRequest : IRequest<CadastraCursoResponse>{
    public string Nome { get; set; } = default!;
    public string Descricao { get; set; } = default!;
    public DateTime Inicio { get; set; }
    public DateTime Fim { get; set; }
    public int ProfessorId { get; set; }
};