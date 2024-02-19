using System.Text;
using Pipeline.Simples;
using Pipeline.Duplo;
namespace Pipeline;
class Program
{
   public static void Main(string[] args)
    { 
        Console.WriteLine("Pipeline :");
        var montagemVeiculo = new Pipeline<StringBuilder>();
        montagemVeiculo.AdicionarEtapa(new EtapaChassi());
        montagemVeiculo.AdicionarEtapa(new EtapaPorta());

        for(int i=0; i <10; i++){

            var veiculo= montagemVeiculo.Processar(new StringBuilder());
            
            Console.WriteLine($"Veículo:{i+1:D2}: {veiculo.ToString()}");
        } 


        Console.WriteLine("PipelineDuplo :");
        var montagemVeiculo2 = new PipelineDuplo<StringBuilder>();
        montagemVeiculo.AdicionarEtapa(new EtapaDuplaChassi());
        montagemVeiculo.AdicionarEtapa(new EtapaDuplaPorta());

        for(int i=0; i <10; i++){

            var veiculo= montagemVeiculo.Processar(new StringBuilder());
            
            Console.WriteLine($"Veículo:{i+1:D2}: {veiculo.ToString()}");
        } 

    }

        
}