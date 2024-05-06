using System.Text;
namespace LinhaDeMontagem;

public class AddInternoMiddleware
{
    private readonly RequestDelegate _next;
    public AddInternoMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context, LinhaDeMontagemDescricao descricao)
    {
        descricao.AdicionarEtapa("Acabamento Interno", $"Acabamento Interno adicionado na cor {descricao.Cor}");
        if (!context.Response.HasStarted)
            await _next(context);
    }
}