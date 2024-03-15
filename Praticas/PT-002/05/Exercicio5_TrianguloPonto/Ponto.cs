using System;

namespace Exercicio5_TrianguloPonto
{
    public struct Ponto<T>
    {
        public T X { get; set; }
        public T Y { get; set; }
        public T Z { get; set; }

        public Ponto(T x, T y, T z)
        {
            X = x;
            Y = y;
            Z = z;
        }

        public override string ToString()
        {
            return $"({X}, {Y}, {Z})";
        }
    }
}
