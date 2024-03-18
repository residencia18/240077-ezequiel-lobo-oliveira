using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        // Criando a lista inicial
        List<double> lista = new List<double> { 3, 7, 2, 4, 6 };

        // Chamando o método ConvertAll() para criar uma nova lista onde cada elemento é dividido por 2
        List<double> novaLista = lista.ConvertAll(x => x / 2);

        // Imprimindo os elementos da nova lista
        novaLista.ForEach(x => Console.WriteLine(x));
    }
}
