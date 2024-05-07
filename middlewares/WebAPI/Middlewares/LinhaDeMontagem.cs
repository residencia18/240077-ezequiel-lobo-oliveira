using System.Text;
namespace LinhaDeMontagem;

public class LinhaDeMontagemDescricao
{
    public List <(string,string)> descricao = new List<(string,string)>();
    public string? Cor { get; set; }

    
    public void AdicionarEtapa(string etapa, string descricao)
    {
        this.descricao.Add((etapa, descricao));
    }
    public override string ToString()
    {
        StringBuilder sb = new StringBuilder();
        int i = 1;
        foreach (var item in descricao)
        {
            sb.AppendLine($"Etapa {i++}: {item.Item1} - {item.Item2}<br>");
        }
        return sb.ToString();
    }
}