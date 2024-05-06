using System.Text;
namespace LinhaDeMontagem;
public class AddMotorMiddleware
{
    private readonly RequestDelegate _next;
    public AddMotorMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context, LinhaDeMontagemDescricao descricao)
    {
        descricao.AdicionarEtapa("Motor", "Motor adicionado");
        await _next(context);
    }
}