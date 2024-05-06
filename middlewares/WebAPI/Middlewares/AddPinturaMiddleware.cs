using System.Text;
namespace LinhaDeMontagem;
public class AddPinturaMiddleware
{
    private readonly RequestDelegate _next;
    public AddPinturaMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context, LinhaDeMontagemDescricao descricao)
    {
        var cores = new string[] { "Preto", "Branco", "Vermelho", "Azul" };
        descricao.Cor = cores[new Random().Next(0, cores.Length)];
        descricao.AdicionarEtapa("Pintura", $"Pintura adicionada na cor {descricao.Cor}");
        await _next(context);
    }
}