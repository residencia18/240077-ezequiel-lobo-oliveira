using System;

class Program
{
    enum Exercicio
    {
        Academia = 1,
        Luta = 2,
        Corrida = 3
    }

    static void Main(string[] args)
    {
        Console.WriteLine("Opções de exercícios:");
        Console.WriteLine($"{(int)Exercicio.Academia}: {Exercicio.Academia}");
        Console.WriteLine($"{(int)Exercicio.Luta}: {Exercicio.Luta}");
        Console.WriteLine($"{(int)Exercicio.Corrida}: {Exercicio.Corrida}");

        Console.WriteLine("\nDigite o número correspondente ao exercício desejado (1, 2 ou 3):");
        string input = Console.ReadLine();

        try
        {
            int exercicioEscolhido = int.Parse(input);

            if (Enum.IsDefined(typeof(Exercicio), exercicioEscolhido))
            {
                Exercicio opcao = (Exercicio)exercicioEscolhido;
                Console.WriteLine($"Exercício escolhido: {opcao}");
            }
            else
            {
                Console.WriteLine("Opção inválida. Por favor, digite um número válido (1, 2 ou 3).");
            }
        }
        catch (FormatException)
        {
            Console.WriteLine("Formato inválido. Por favor, digite um número válido (1, 2 ou 3).");
        }
    }
}
