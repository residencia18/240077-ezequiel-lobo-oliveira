using System.Collections.Generic;
namespace Pipeline.Duplo;
public interface IEtapaDupla<T>
{
    T Processar(T entrada);
}
