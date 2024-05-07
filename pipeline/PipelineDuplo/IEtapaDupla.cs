using System.Collections.Generic;
namespace Pipeline.Duplo;
using Pipeline.Simples;

public interface IEtapaDupla<T> : IEtapa<T>
{
   IEtapaDupla<T> ProximaEtapa {get; set;}
}
