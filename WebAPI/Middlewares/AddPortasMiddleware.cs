using System.Text;

namespace LinhaDeMontagem;
public class AddPortasMiddleware
{
    private readonly RequestDelegate _next;
    public AddPortasMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context, LinhaDeMontagemDescricao descricao)
    {
        descricao.AdicionarEtapa("Portas", "Portas adicionadas");
        await _next(context);
        descricao.AdicionarEtapa("Portas", $"Maçanetas {descricao.Cor} adicionadas");
    }

}