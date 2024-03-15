
using GestaoFinanceira;
class Program
{
    static void Main(string[] args)
    {
        ContaBancaria conta = new ContaBancaria(1000);

        conta.Depositar(200);
        conta.Sacar(500);
        conta.Transferir(700, new ContaBancaria(0));
    }
}