using System;

namespace Exercicio5_TrianguloPonto
{
    class Program
    {
        static void Main(string[] args)
        {
            // Testando com inteiros
            Ponto<int> ponto1 = new Ponto<int>(1, 2, 3);
            Ponto<int> ponto2 = new Ponto<int>(4, 5, 6);
            Ponto<int> ponto3 = new Ponto<int>(7, 8, 9);

            Triangulo<int> trianguloInt = new Triangulo<int>(ponto1, ponto2, ponto3);
            Console.WriteLine("Triângulo com inteiros:");
            Console.WriteLine(trianguloInt);

            // Testando com doubles
            Ponto<double> ponto4 = new Ponto<double>(1.5, 2.5, 3.5);
            Ponto<double> ponto5 = new Ponto<double>(4.5, 5.5, 6.5);
            Ponto<double> ponto6 = new Ponto<double>(7.5, 8.5, 9.5);

            Triangulo<double> trianguloDouble = new Triangulo<double>(ponto4, ponto5, ponto6);
            Console.WriteLine("\nTriângulo com doubles:");
            Console.WriteLine(trianguloDouble);
        }
    }
}
