using System.Text;
namespace Pipeline.Duplo; 

public class EtapaChassi : IEtapaDupla<StringBuilder>
{
    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Chassi]");
        return entrada;
    }
}