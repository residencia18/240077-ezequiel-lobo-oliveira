namespace Pipeline.Duplo;
using System.Text;
public class EtapaPorta : IEtapaDupla<StringBuilder>
{
    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Porta]");
        return entrada;
    }
}