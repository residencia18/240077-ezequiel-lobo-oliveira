using System.Text;
namespace Pipeline.Duplo; 

public class EtapaDuplaChassi : IEtapaDupla<StringBuilder>
{
    public IEtapaDupla<StringBuilder> ProximaEtapa { get; set;}

    public StringBuilder Processar(StringBuilder entrada)
    {
        entrada.Append("[Chassi]");
        entrada = ProximaEtapa?.Processar(entrada)?? entrada;
        return entrada;
    }
}