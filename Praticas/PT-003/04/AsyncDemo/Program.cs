using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Iniciando duas tarefas simultâneas
        Task task1 = DoWorkAsync("Tarefa 1");
        Task task2 = DoWorkAsync("Tarefa 2");

        // Aguardando a conclusão de ambas as tarefas
        await Task.WhenAll(task1, task2);

        Console.WriteLine("Ambas as tarefas foram concluídas.");
    }

    static async Task DoWorkAsync(string taskName)
    {
        Console.WriteLine($"Iniciando {taskName}");

        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"{taskName} em progresso... Etapa {i}");
            await Task.Delay(1000); // Simula o trabalho sendo realizado
        }

        Console.WriteLine($"{taskName} concluída!");
    }
}
