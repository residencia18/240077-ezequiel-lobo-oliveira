namespace Pipeline.Duplo;
using System.Text;
public class EtapaDuplaPorta : IEtapaDupla<StringBuilder>
{
     public IEtapaDupla<StringBuilder> ProximaEtapa { get; set;}
    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Porta]");
        entrada = ProximaEtapa?.Processar(entrada)?? entrada;
        return entrada;
    }
}