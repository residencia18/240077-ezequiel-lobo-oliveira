using System;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        // Criando as instâncias dos trabalhadores
        Worker worker1 = new Worker();
        Worker worker2 = new Worker();

        // Criando as threads para executar o trabalho simultaneamente
        Thread thread1 = new Thread(worker1.Work);
        Thread thread2 = new Thread(worker2.Work);

        // Iniciando as threads
        thread1.Start();
        thread2.Start();

        // Aguardando até que ambas as threads tenham terminado de executar
        thread1.Join();
        thread2.Join();

        Console.WriteLine("Ambas as threads terminaram. Programa encerrado.");
    }
}