using System;

namespace Exercicio5_TrianguloPonto
{
    public struct Triangulo<T>
    {
        public Ponto<T> P1 { get; set; }
        public Ponto<T> P2 { get; set; }
        public Ponto<T> P3 { get; set; }

        public Triangulo(Ponto<T> p1, Ponto<T> p2, Ponto<T> p3)
        {
            P1 = p1;
            P2 = p2;
            P3 = p3;
        }

        public override string ToString()
        {
            return $"Triângulo com os pontos: {P1}, {P2}, {P3}";
        }
    }
}
