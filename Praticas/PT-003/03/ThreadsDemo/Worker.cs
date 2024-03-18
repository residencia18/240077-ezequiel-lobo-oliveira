public class Worker
{
    public void Work()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"Trabalho em progresso... Etapa {i}");
            Thread.Sleep(1000); // Simula o trabalho sendo realizado
        }
        Console.WriteLine("Trabalho concluído!");
    }
}