using System.Text;
namespace LinhaDeMontagem;

public class AddChassiMiddleware
{
    private readonly RequestDelegate _next;
    public AddChassiMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context, LinhaDeMontagemDescricao descricao)
    {
        context.Response.ContentType = "text/html; charset=utf-8";
        descricao.AdicionarEtapa("Chassi", "Chassi adicionado");
        await _next(context);
        await context.Response.WriteAsync(descricao.ToString());
    }
}