using System.Collections.Generic;
namespace Pipeline.Duplo;
public class PipelineDuplo<T>
{
   private List<IEtapaDupla<T>> etapas =new List<IEtapaDupla<T>>();
   public PipelineDuplo<T>AdicionarEtapa(IEtapaDupla<T> etapa)
   {
    etapas.Add(etapa);
    return this;
    
   }
   public T Processar (T entrada){
      foreach(var etapa in etapas){
         entrada = etapa.Processar(entrada);

   }
   return entrada;
   }
}
