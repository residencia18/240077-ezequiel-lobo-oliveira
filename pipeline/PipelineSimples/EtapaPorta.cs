namespace Pipeline.Simples;
using System.Text;
public class EtapaPorta : IEtapa<StringBuilder>
{
    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Porta]");
        return entrada;
    }
}