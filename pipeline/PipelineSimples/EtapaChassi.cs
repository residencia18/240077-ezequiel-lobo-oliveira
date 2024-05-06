using System.Text;
namespace Pipeline.Simples; 

public class EtapaChassi : IEtapa<StringBuilder>
{
    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Chassi]");
        return entrada;
    }
}