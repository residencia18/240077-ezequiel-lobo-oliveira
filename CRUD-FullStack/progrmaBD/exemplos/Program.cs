using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Digite uma data no formato dd/MM/yyyy:");

        string userInput = Console.ReadLine();

        if (TryValidateAndParseDate(userInput, out DateTime date))
        {
            Console.WriteLine($"Data válida: {date.ToShortDateString()}");
        }
        else
        {
            Console.WriteLine("Erro ao validar ou converter a data.");
        }
    }

    static bool TryValidateAndParseDate(string input, out DateTime date)
    {
        date = default; // Valor padrão (DateTime.MinValue) em caso de falha na validação

        if (DateTime.TryParseExact(input, "dd/MM/yyyy", null, System.Globalization.DateTimeStyles.None, out date))
        {
            return true; // A data é válida
        }
        else
        {
            return false; // A data é inválida
        }
    }
}
