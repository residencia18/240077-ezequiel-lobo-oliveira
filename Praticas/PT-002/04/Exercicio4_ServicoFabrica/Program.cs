
using System;
using Exercicio4_ServicoFabrica;
class Program
{
    static void Main(string[] args)
    {
        ServicoFabrica<MeuServico> fabrica = new ServicoFabrica<MeuServico>();
        MeuServico servico = fabrica.NovaInstancia();
        servico.Executar();
    }
}
